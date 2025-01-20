# Projet Front-End avec NextJS

## Description
Ce projet consiste à développer une plateforme Web utilisant le framework **NextJS** et la bibliothèque de composants **Ant Design**, dans le cadre d'une thématique de recrutement. Le projet propose :

- Une page pour les candidats, permettant de renseigner leurs informations personnelles via un formulaire.
- Une page pour les recruteurs, affichant une liste des candidats.
- Une page pour les recruteurs, affichant les détails d'un candidat sélectionné.
- Une gestion des états avec **Redux**.
- Une gestion des traductions multilingues.

Ce projet fut une excellente opportunité pour explorer les capacités de **NextJS** et les outils associés.

---

## Installation

### Prérequis
- **Node.js** v16 ou plus récent.
- **npm** (installé avec Node.js).

### Étapes
1. Clonez ce dépôt :
   ```bash
   git clone <lien-du-repo>
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd projet_front_end_dev
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Lancez le projet :
   ```bash
   npm run dev
   ```

Le projet sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## Problèmes rencontrés
Durant le développement, j'ai rencontré un problème lié à la compilation avec la commande `npm run dev`. Plus précisément, des conflits étaient présents dans les fichiers **i18n.js** et **next.config.mjs**. Ces conflits étaient dus à des différences dans la manière de configurer les modules, notamment l'utilisation de CommonJS vs. ES Modules.

Cependant, ce fut un défi enrichissant qui m'a permis d'explorer des notions clés comme :

- La gestion des modules et des fichiers de configuration dans NextJS.
- La mise en place de traductions multilingues.
- La gestion des erreurs et des logs lors de la compilation.

---

## Ce que j'ai appris
Ce projet m'a permis de découvrir et de maîtriser plusieurs concepts :

- La création d'interfaces utilisateur avec **Ant Design**.
- L'utilisation de **Redux** pour la gestion des états globaux.
- La configuration des routes avec le nouveau **App Router** de NextJS 14.
- La gestion des traductions multilingues avec `next-i18next`.

C'était une excellente introduction à NextJS, qui constitue un outil puissant pour le développement de projets modernes.

---

## Structure du projet
Voici une vue d'ensemble de l'arborescence du projet :

```
projet_front_end_dev/
├── app/
│   ├── candidats/
│   │   ├── formulaire/
│   │   │   └── page.js
│   ├── recruteurs/
│   │   ├── liste/
│   │   │   └── page.js
│   │   ├── details/
│   │   │   ├── [id]/
│   │   │   │   └── page.js
├── public/
├── styles/
├── i18n.js
├── next.config.mjs
├── package.json
├── README.md
```

---

## Remerciements
Merci aux ressources disponibles en ligne et aux outils comme **Draw.io**, qui ont été précieux pour la conception de ce projet.

