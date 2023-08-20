# Establecer la imagen base con Node.js 18
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
# COPY package*.json ./

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Instalar las dependencias de la aplicación utilizando Yarn
RUN yarn install

# Compilar la aplicación
RUN yarn build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3006

# Establecer el comando de inicio de la aplicación
CMD [ "yarn", "start:prod" ]
