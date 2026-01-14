# 🚀 Guide de Déploiement VPS - CleanDar Landing

## Installation initiale sur le VPS

### 1. Cloner le projet

```bash
cd /var/www
git clone https://github.com/saifmiahpro/cleandar-landing.git
cd cleandar-landing
```

### 2. Copier le script de déploiement

```bash
# Le script vps-deploy.sh est déjà dans le repo
chmod +x vps-deploy.sh
```

### 3. Premier déploiement

```bash
docker compose up -d --build
```

---

## Déploiement manuel (simple)

### À chaque fois que tu push sur GitHub :

```bash
cd /var/www/cleandar-landing
./vps-deploy.sh
```

C'est tout ! Le script :
- ✅ Pull les derniers changements
- ✅ Build l'image Docker
- ✅ Redémarre les containers
- ✅ Nettoie les images inutiles

---

## Option 2 : Déploiement automatique avec Webhook

### A. Sur le VPS - Créer un serveur webhook

1. **Installer le serveur webhook**

```bash
# Installer webhook
sudo apt update
sudo apt install webhook -y
```

2. **Créer la config webhook**

```bash
sudo nano /etc/webhook/hooks.json
```

Contenu :

```json
[
  {
    "id": "cleandar-deploy",
    "execute-command": "/var/www/cleandar-landing/vps-deploy.sh",
    "command-working-directory": "/var/www/cleandar-landing",
    "response-message": "Déploiement en cours",
    "trigger-rule": {
      "match": {
        "type": "payload-hash-sha256",
        "secret": "TON_SECRET_ICI",
        "parameter": {
          "source": "header",
          "name": "X-Hub-Signature-256"
        }
      }
    }
  }
]
```

3. **Démarrer le webhook**

```bash
# Lancer webhook en background
sudo systemctl enable webhook
sudo systemctl start webhook

# Ou manuellement
webhook -hooks /etc/webhook/hooks.json -verbose -port 9000
```

### B. Sur GitHub - Configurer le webhook

1. Va sur ton repo : `https://github.com/saifmiahpro/cleandar-landing`
2. Settings → Webhooks → Add webhook
3. Payload URL : `http://TON_IP_VPS:9000/hooks/cleandar-deploy`
4. Content type : `application/json`
5. Secret : Le même que dans `hooks.json`
6. Events : "Just the push event"
7. Active : ✅

### C. Tester

Push un commit et le VPS déploiera automatiquement ! 🎉

---

## Commandes utiles

### Voir les logs

```bash
docker compose logs -f
```

### Redémarrer manuellement

```bash
docker compose restart
```

### Voir le status

```bash
docker compose ps
```

### Rebuild complet

```bash
docker compose down
docker compose up -d --build --force-recreate
```

### Nettoyer tout Docker

```bash
docker system prune -a
```

---

## Configuration Nginx (si nécessaire)

Si tu veux mettre le site sur un domaine :

```nginx
server {
    listen 80;
    server_name cleandar.pro www.cleandar.pro;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Puis :

```bash
sudo ln -s /etc/nginx/sites-available/cleandar-landing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# SSL avec Certbot
sudo certbot --nginx -d cleandar.pro -d www.cleandar.pro
```

---

## Quelle option choisir ?

### ✋ Manuel (`./vps-deploy.sh`)
- ✅ Simple et contrôlé
- ✅ Tu décides quand déployer
- ❌ Nécessite une connexion SSH à chaque fois

### 🤖 Automatique (Webhook)
- ✅ Déploiement instantané à chaque push
- ✅ Pas besoin de SSH
- ❌ Déploie même les commits "work in progress"
- ❌ Setup un peu plus complexe
