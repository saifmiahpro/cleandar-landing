# Bible de Conception : CleanDar - L'OS Ultime des Indépendants Itinérants

Ce document est la source de vérité pour le développement de la Landing Page. Il doit être suivi à la lettre pour garantir le niveau d'excellence et la densité fonctionnelle attendus.

---

## 1. VISION PRODUIT : "ARRÊTEZ DE BRICOLER."
CleanDar n'est pas "juste un agenda". C'est un **Système d'Exploitation complet** pour les pros qui bougent (Coiffeurs à domicile, VTC, Infirmiers, Artisans).
*   **Problème Actuel :** Ils utilisent Calendly (30€) + Wix (20€) + un TPE (1.75%) + Google Maps + Excel. C'est le chaos et ça coûte cher.
*   **Solution CleanDar :** **Un seul abonnement**. Tout est intégré.

---

## 2. STRUCTURE DE LA PAGE (NARRATION "SCROLLYTELLING")
La page est une longue séquence continue de **4000px à 6000px**.
Nous ne voulons pas de "blocs statiques" séparés par du blanc. Nous voulons une **histoire fluide** où l'utilisateur scrolle pour découvrir chaque super-pouvoir.

### SCÈNE 0 : L'ACCROCHE (Value Proposition)
*   **Titre :** "Votre Business dans votre Poche."
*   **Sous-titre :** "Booking + Site Web + Facturation + Optimisation Trajets. Arrêtez de payer 4 abonnements."
*   **Visuel Hero :**
    *   Pas une illustration abstraite.
    *   Un **Iphone 16 Pro Max ultra-réaliste** flottant au centre.
    *   À l'écran : Le Dashboard CleanDar qui "vit" (notifications de paiements qui poppent, jauge de revenus qui monte).

### SCÈNE 1 : L'OPTIMISATION TRAJET (La "Killer Feature" pour les itinérants)
*   **Le Contexte :** "Vous perdez 2h par jour en voiture ?"
*   **L'Animation Scrollytelling :**
    *   Au scroll, le téléphone affiche une **Carte Google Maps**.
    *   **Phase 1 (Le Mauvais) :** On voit des points éparpillés dans toute la ville. Des lignes rouges relient les points dans le désordre (A -> Z -> B). Compteur : "140km / jour". C'est l'enfer.
    *   **Phase 2 (La Solution) :** Le scroll continue. CleanDar réorganise les points. Les lignes deviennent vertes et forment une boucle parfaite.
    *   **Résultat :** Le compteur descend à "40km / jour".
    *   **Message Clé :** "CleanDar ne propose aux clients que les créneaux qui vous arrangent géographiquement."

### SCÈNE 2 : LE BOOKING INTELLIGENT (Plus qu'un simple calendrier)
*   **Le Contexte :** "Fini les trous de 45mn perdus."
*   **L'Animation :**
    *   Le téléphone bascule en vue Agenda (Semaine).
    *   On voit des trous blancs (temps vide).
    *   Au scroll, des blocs de RDV ("Coupe", "Consultation") tombent comme des pièces de **Tetris** et viennent combler *exactement* les trous.
    *   **Texte Flottant :** "Algorithme Anti-Trous activé."

### SCÈNE 3 : LE "TOUT-EN-UN" (Comparatif Visuel)
*   **Le Concept :** Montrer visuellement l'économie.
*   **L'Action :**
    *   À gauche de l'écran : Une pile d'icônes (Wix, Calendly, QuickBooks, SumUp). Un compteur affiche "Total : 150€/mois". C'est lourd, ça tremble.
    *   À droite : Le logo CleanDar, seul, pur. Compteur : "29€/mois".
    *   Au scroll, la pile de gauche est "aspirée" par le logo CleanDar. Une onde de choc visuelle nettoie l'écran.
    *   **Message :** "Simplifiez votre stack. Maximisez votre marge."

### SCÈNE 4 : SITE WEB INCLUS & INTÉGRATION (Flexibilité)
*   **Pour ceux qui n'ont rien :** On montre un **Site Web complet généré** sur le téléphone. "Pas de site ? CleanDar vous en crée un : `cleandar.bio/votre-nom` référencé sur Google."
*   **Pour ceux qui ont déjà un site :**
    *   Le téléphone s'écarte. Une fenêtre de code apparaît brièvement (`<script>...`).
    *   On voit un site WordPress classique. Le Widget CleanDar vient se glisser en bas à droite.
    *   **Message :** "Déjà un site ? Copiez-collez une ligne de code. C'est fait."

### SCÈNE 5 : L'AFFILIATION (Growth)
*   **Le Concept :** "Votre réseau vaut de l'or."
*   **Visuel :**
    *   Une notification push apparaît sur le téléphone : "Félicitations ! Thomas s'est inscrit avec votre lien. Vous avez gagné 50€."
    *   Des pièces virtuelles ou une courbe de revenus "bonus" s'ajoutent au dashboard.
    *   **Message :** "Parrainez vos confrères, payez votre abonnement avec vos gains."

---

## 3. UI & DENSITÉ (Le "Look & Feel")
Il faut que ce soit "Riche". On veut voir :
*   De vraies **cartes géographiques** (style Apple Maps ou Mapbox dark).
*   De vrais **SMS de rappel** ("Bonjour Julie, n'oubliez pas votre RDV de demain...").
*   De vraies **factures PDF** qui se génèrent à l'écran.

## 4. INSTRUCTIONS AU DÉVELOPPEUR (GUIDELINES)
1.  **Framework :** Next.js 14+ avec `framer-motion` pour orchestrer toutes ces séquences complexes.
2.  **Composants :** Utiliser des composants "Bento" pour les sections statiques (Features secondaires) et un composant "Sticky Device" pour le scrollytelling principal.
3.  **Performance :** Utiliser des propriétés CSS transform (translate3d, scale) pour garantir 60FPS même avec beaucoup d'éléments.
4.  **Mobile First :** Sur mobile, le "Device" est en background fixe, et le texte défile par-dessus dans des cartes avec effet de flou (backdrop-blur).
