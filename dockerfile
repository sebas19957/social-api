# Establecer la imagen base con Node.js 18
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Instalar las dependencias de la aplicación utilizando Yarn
RUN yarn install

# Realizar pruebas
RUN yarn test

# Compilar la aplicación
RUN yarn build

ARG DB_PASSWORD_ENV
ARG DB_NAME_ENV
ARG DB_HOST_ENV
ARG DB_PORT_ENV
ARG DB_USERNAME_ENV

ENV DB_PASSWORD=$DB_PASSWORD_ENV
ENV DB_NAME=$DB_NAME_ENV
ENV DB_HOST=$DB_HOST_ENV
ENV DB_PORT=$DB_PORT_ENV
ENV DB_USERNAME=$DB_USERNAME_ENV

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3006

# Establecer el comando de inicio de la aplicación
CMD [ "yarn", "start:prod" ]
