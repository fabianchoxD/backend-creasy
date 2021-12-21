FROM node:14.17.6

# Repositorio para la aplicación

WORKDIR /usr/src/app

# Instalación de dependencias

COPY package*.json ./

RUN npm install  

COPY . . 

EXPOSE 8080

CMD ["node", "server.js"]