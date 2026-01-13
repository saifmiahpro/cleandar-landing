# Déploiement CleanDar Landing sur VPS avec PM2

## Prérequis sur le VPS

```bash
# Installer Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Installer PM2 globalement
sudo npm install -g pm2
```

## Première installation

```bash
# 1. Créer le dossier
sudo mkdir -p /var/www/cleandar-landing
sudo chown $USER:$USER /var/www/cleandar-landing

# 2. Copier les fichiers (depuis ta machine locale)
# Option A: Via Git (recommandé)
cd /var/www/cleandar-landing
git clone <ton-repo> .

# Option B: Via SCP
scp -r /Users/saif/Documents/cleandar/cleandar-landing/* user@ton-vps:/var/www/cleandar-landing/

# 3. Installer et build
cd /var/www/cleandar-landing
npm install
npm run build

# 4. Lancer avec PM2
pm2 start ecosystem.config.js --env production

# 5. Configurer le démarrage auto
pm2 save
pm2 startup
```

## Configuration Nginx (reverse proxy)

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
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/cleandar-landing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## SSL avec Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d cleandar.pro -d www.cleandar.pro
```

## Commandes PM2 utiles

```bash
pm2 status              # Voir le statut
pm2 logs cleandar-landing  # Voir les logs
pm2 restart cleandar-landing  # Redémarrer
pm2 reload cleandar-landing   # Reload sans downtime
pm2 monit               # Monitoring temps réel
```

## Mise à jour du site

```bash
cd /var/www/cleandar-landing
./deploy.sh
```
