#!/bin/bash
set -e

BRANCH="main"
PROJECT_NAME="cleandar-landing"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Déploiement CleanDar Landing"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo ""
echo "📦 Pull du code depuis GitHub..."
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

echo ""
echo "🔨 Build de l'image Docker..."
docker compose build --no-cache

echo ""
echo "🔄 Redémarrage des containers..."
docker compose down
docker compose up -d

echo ""
echo "🧹 Nettoyage des images inutilisées..."
docker image prune -f

echo ""
echo "✅ Déploiement terminé !"
echo ""
echo "📊 Status des containers :"
docker compose ps

echo ""
echo "🌐 Le site est disponible sur le port 3000"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
