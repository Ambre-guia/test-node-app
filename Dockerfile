# Dockerfile
# This Dockerfile sets up a Node.js application with the necessary dependencies and configurations.
# It uses the official Node.js image based on Alpine Linux for a lightweight container.
# The application listens on port 3000 and runs the server.js file when the container starts
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration et installer les dépendances
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Commande par défaut pour démarrer l'application
CMD ["npm", "test"]
