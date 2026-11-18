# Usamos Node para compilar la aplicación de Angular
FROM node:18-alpine AS build
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del código del proyecto Angular
COPY . .

# Compilamos para producción (genera la carpeta dist/)
RUN npm run build --configuration=production

# Usamos Nginx para servir los archivos estáticos ya compilados
FROM nginx:alpine

# Copiamos los archivos compilados desde la etapa anterior a la ruta pública de Nginx
COPY --from=build /app/dist/mi-practica-docker /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]