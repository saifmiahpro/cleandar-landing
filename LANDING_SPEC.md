# 🎯 CLEANDAR LANDING PAGE - SPÉCIFICATION DÉFINITIVE

## 1. PRODUIT : CleanDar

**CleanDar** est un SaaS tout-en-un pour les professionnels itinérants (coiffeurs, infirmiers, VTC...).

### Fonctionnalités clés :
1. **Agenda Intelligent** - Synchro Google/Apple, rappels SMS, acomptes
2. **Optimisation Trajets** - L'IA regroupe les RDV par zone géographique
3. **Site Web Inclus** - cleandar.bio/votre-nom, réservation en ligne
4. **Paiements Intégrés** - Encaissement par lien SMS
5. **Facturation Auto** - Génération et envoi automatiques
6. **Affiliation** - 50€ par filleul inscrit

### Positionnement :
- **Prix** : 29€/mois tout inclus
- **Cible** : Indépendants itinérants francophones
- **Promesse** : "Tout votre business dans une seule app"

---

## 2. DIRECTION VISUELLE

### Inspiration :
- **Linear.app** - Minimalisme, dark mode élégant
- **Vercel** - Gradients subtils, animations fluides
- **Stripe** - Clarté, professionnalisme
- **Apple** - Devices comme héros visuels

### Palette de couleurs :
```
PRIMARY:     Violet-600 (#7c3aed) → Indigo-600 (#4f46e5)
ACCENT:      Emerald-500 (#10b981) pour succès/économies
BACKGROUND:  Slate-50 (#f8fafc) ou Dark (#0a0a0b)
TEXT:        Slate-900 (#0f172a) / White
```

### Typographie :
- **Titres** : Font-weight 900 (black), leading tight
- **Corps** : Font-weight 400-500, Slate-500 pour secondaire
- **Tailles** : H1 = 4xl-7xl, H2 = 3xl-5xl, Body = lg-xl

---

## 3. STRUCTURE DE LA PAGE

### Section 1: HERO (100vh)
```
┌─────────────────────────────────────────────────────┐
│  [NAV: Logo | CTA]                                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [Badge: "L'OS des Indépendants"]                  │
│                                                     │
│  Gérez votre business                              │
│  comme un pro.                     [  iPHONE   ]   │
│                                    [  MOCKUP   ]   │
│  Agenda + Site + Factures...       [  (animé)  ]   │
│  29€/mois tout inclus.                             │
│                                                     │
│  [CTA Principal] [CTA Secondaire]                  │
│                                                     │
│  [Trust indicators: 2847 users, 4.9 stars]         │
│                                                     │
│              ↓ Scrollez                            │
└─────────────────────────────────────────────────────┘
```

### Section 2-4: FEATURES SCROLLYTELLING (300vh total)
Le scroll fait défiler 3 features avec l'iPhone qui reste sticky et change de contenu.

**Feature 1 : Trajets** (100vh)
- Texte à gauche, iPhone à droite
- iPhone affiche une carte avec route animée
- Animation : Points apparaissent, ligne verte se dessine

**Feature 2 : Agenda** (100vh)  
- Texte à droite, iPhone à gauche (alternance)
- iPhone affiche un agenda avec blocs qui tombent
- Animation : Tetris-like, blocs colorés

**Feature 3 : Site Web** (100vh)
- Texte à gauche, iPhone à droite
- iPhone affiche un mini-site de booking
- Animation : Page qui s'affiche, slots cliquables

### Section 5: FEATURES GRID
6 cartes en grille 2x3, avec icônes et descriptions courtes.

### Section 6: PRICING
Une seule card centrée avec le prix et la liste des inclusions.

### Section 7: CTA FINAL
Titre accrocheur + gros bouton.

### Section 8: FOOTER
Minimal : Logo, liens, copyright.

---

## 4. EXIGENCES TECHNIQUES

### Framework :
- Next.js 14+ avec App Router
- Framer Motion pour animations
- Tailwind CSS pour le styling

### Performance :
- 60 FPS minimum
- Utiliser uniquement `transform` et `opacity` pour les animations
- Lazy loading des sections hors viewport

### Responsive :
- **Mobile (<768px)** : iPhone en haut, texte en dessous dans une carte
- **Tablet (768-1024px)** : Layout flexible
- **Desktop (>1024px)** : Grid 2 colonnes, iPhone sticky

---

## 5. ANIMATIONS REQUISES

### Hero :
- Entrée staggered (badge → titre → description → CTAs)
- iPhone qui "flotte" légèrement (subtle)
- Indicateur scroll qui bounce

### Scrollytelling :
- iPhone qui reste **sticky** au centre/droite
- Contenu iPhone qui **crossfade** entre les écrans
- Texte qui **fade in/out** avec scroll
- Animations **internes** au phone (points, lignes, blocs)

### Feature Cards :
- Apparition au scroll (viewport reveal)
- Hover : lift + shadow
- Icônes avec gradient backgrounds

### Micro-interactions :
- Boutons : scale on hover/tap
- Links : underline animation
- Cards : subtle lift

---

## 6. ❌ CE QU'IL NE FAUT PAS FAIRE

1. **PAS de chevauchement texte/device** - Toujours utiliser des colonnes grid
2. **PAS de fade trop rapide** - Plages de scroll larges (0.15-0.40, pas 0.15-0.20)
3. **PAS de contenu invisible** - Toujours un fond sur les containers sticky
4. **PAS d'animations bloquantes** - Tout doit être lié au scroll ou en loop
5. **PAS de layout cassé sur mobile** - Tester les breakpoints
6. **PAS de texte trop petit** - Minimum 16px pour le body
7. **PAS de couleurs cheap** - Utiliser les gradients subtils
8. **PAS de complexité inutile** - Si ça bug, simplifier

---

## 7. CHECKLIST QUALITÉ

Avant de considérer la landing terminée :

- [ ] Hero visible et lisible immédiatement
- [ ] Scroll fonctionne sans page blanche
- [ ] iPhone visible sur TOUS les breakpoints
- [ ] Texte ne chevauche JAMAIS le device
- [ ] Toutes les animations sont smooth (60fps)
- [ ] Les transitions sont réversibles (scroll up fonctionne)
- [ ] Pricing clairement affiché
- [ ] CTA visibles et cliquables
- [ ] Footer présent
- [ ] Aucune erreur console

---

## 8. IMPLÉMENTATION ÉTAPE PAR ÉTAPE

### Étape 1 : Structure de base
Créer le squelette avec toutes les sections (sans animations).
Vérifier que le layout est correct sur mobile/desktop.

### Étape 2 : Hero statique
Implémenter le hero avec texte + device statique.
S'assurer que tout est lisible et bien positionné.

### Étape 3 : Scrollytelling container
Ajouter le container sticky avec hauteur de scroll.
Vérifier que le sticky fonctionne (pas de page blanche).

### Étape 4 : Transitions de texte
Ajouter les fade in/out des textes avec useTransform.
Tester le scroll up ET down.

### Étape 5 : Transitions du phone
Ajouter les différents écrans phone avec crossfade.
Vérifier que les écrans changent correctement.

### Étape 6 : Animations internes
Ajouter les animations dans chaque écran phone.
S'assurer qu'elles se déclenchent au bon moment.

### Étape 7 : Polish
Ajouter les micro-interactions (hover, entrance animations).
Optimiser les performances.

### Étape 8 : Responsive
Tester et ajuster pour mobile.
S'assurer que l'iPhone est visible et le texte lisible.

---

## 9. CODE DE RÉFÉRENCE

### Structure du sticky container :
```tsx
<div ref={containerRef} style={{ height: "400vh" }}>
  <div className="sticky top-0 h-screen bg-white overflow-hidden">
    {/* Contenu qui reste fixe pendant le scroll */}
  </div>
</div>
```

### Transitions avec useTransform :
```tsx
const { scrollYProgress } = useScroll({ target: containerRef });
const progress = useSpring(scrollYProgress, { damping: 30 });

// Plages LARGES pour transitions smooth
const opacity1 = useTransform(progress, [0.10, 0.18, 0.35, 0.42], [0, 1, 1, 0]);
```

### Layout grid sans chevauchement :
```tsx
<div className="grid lg:grid-cols-2 gap-8 items-center">
  <div>{/* Texte - prend sa colonne */}</div>
  <div>{/* Device - prend sa colonne */}</div>
</div>
```

---

# 🚀 MAINTENANT : IMPLÉMENTATION

Je vais maintenant implémenter cette spec étape par étape, en vérifiant chaque étape avant de passer à la suivante.
