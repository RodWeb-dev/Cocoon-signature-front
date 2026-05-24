FROM node:22-alpine

WORKDIR /app

# Copie les fichiers de dépendances
COPY src/package*.json ./

# Installe les dépendances
RUN npm install

# Monte le code source via volume (hot-reload)
EXPOSE 3000

CMD ["npm", "run", "dev"]
