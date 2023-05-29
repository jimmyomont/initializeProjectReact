# Projet initialisé Réact avec Node


## initialisation avec comme dossiers et fichiers :
```txt
src/
├index.html
├index.js
├─ components/
│  ├─ App/
│  │  ├─ index.js
│  │  └─ style.scss 
│  ├─ Header/
│  │  ├─ index.js
│  │  └─ style.scss 
│  ├─ Main/
│  │  ├─ index.js
│  │  └─ style.scss 
│  └─ Footer/
│     ├─ index.js
│     └─ style.scss 
└.gitignore
```


les fichiers sont pré-remplis 

### Installer parcel :

``npm install``

### Commandes pour initialiser un project réact : 

``node init-project.mjs NomDeVotreProjet``

*le nom de votre projet doit s'écrire sans éspaces et sera ajouté au titre de ``head`` dans l'index.html

### Tester si tout est ok avec : 

``npm run start``

le `Header`, `Main` et le `Footer` devraient apparaître dans le navigateur

### Complément de projet :

Ajouter autant de dossiers que voulu à src/components/ avec fichier index.js et Style.scss près-remplis

``node create-components.mjs NomDuNouveauDossier NomDuNouveauDossier2 ``