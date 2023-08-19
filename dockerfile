# /app /usr /lib
FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# Destino /app
COPY package.json ./

# Instalar las dependecias
RUN yarn install

# Expone el puerto en el que se ejecutará la API
# EXPOSE 3005

# Define el comando para iniciar la aplicación
CMD [ "yarn", "run", "start:dev" ]