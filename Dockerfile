# ETAPA 1: Construcción de Angular
FROM node:22-alpine AS build

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el código del proyecto
COPY . .

# Compilar Angular para producción
RUN npm run build -- --configuration=production

# ETAPA 2: Servidor web Nginx
FROM nginx:alpine

# Copiar archivos compilados de Angular
COPY --from=build /app/dist/mi-practica-docker/browser /usr/share/nginx/html

# Puerto del servidor web
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
