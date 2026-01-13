#!/bin/bash

# ===========================================
# CleanDar Landing - Deployment Script
# ===========================================

set -e

echo "🚀 Déploiement CleanDar Landing..."

# Variables
APP_DIR="/var/www/cleandar-landing"
REPO_URL="git@github.com:YOUR_USERNAME/cleandar-landing.git"  # À modifier

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 1. Mise à jour du code
echo -e "${YELLOW}📦 Mise à jour du code...${NC}"
if [ -d "$APP_DIR" ]; then
    cd $APP_DIR
    git pull origin main
else
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
fi

# 2. Installation des dépendances
echo -e "${YELLOW}📦 Installation des dépendances...${NC}"
npm ci --production=false

# 3. Build de production
echo -e "${YELLOW}🔨 Build de production...${NC}"
npm run build

# 4. Restart PM2
echo -e "${YELLOW}🔄 Redémarrage PM2...${NC}"
pm2 reload ecosystem.config.js --env production || pm2 start ecosystem.config.js --env production

# 5. Sauvegarde PM2
pm2 save

echo -e "${GREEN}✅ Déploiement terminé !${NC}"
echo -e "${GREEN}🌐 Site disponible sur le port 3000${NC}"
