# 🚀 Mon Projet

## 📋 Prérequis

Avant de commencer, assure-toi d'avoir installé :

- **Node.js** version **20.18.1** ou supérieure. Tu peux vérifier ta version avec :
  ```sh
  node -v
  ```

## 📦 Installation

1. Clone ce dépôt :
   ```sh
   git clone https://github.com/ssi-moha/music-pack-helper.git
   ```

2. Accède au dossier du projet :
   ```sh
   cd music-pack-helper
   ```

3. Installe les dépendances :
   ```sh
   npm install
   ```

## 🚀 Lancer le projet

Une fois les dépendances installées, démarre l'application avec :

```sh
npm start
```

## ⚠️ Important

Avant de lancer le projet, **assure-toi de modifier la variable `sheetName` dans `options`** pour correspondre au nom de la feuille que tu veux utiliser.

📌 Exemple dans le code :
```js
const options = {
  sheetName: "NomDeTaFeuille", // ⚠️ Modifier ici
};
```

Sans cette modification, l'application pourrait ne pas fonctionner correctement.

---

🛠 Bon développement ! 🎉
