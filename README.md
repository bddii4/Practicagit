# Mi práctica Docker - Angular

## Descripción
Proyecto Angular compilado con Docker y servido mediante Nginx.

## Tecnologías
- Angular 22
- Node.js 22
- Docker
- Docker Compose
- Nginx

## Arquitectura multi-stage
1. Build: instala dependencias y compila Angular con Node.js.
2. Producción: Nginx sirve los archivos compilados.

## Ejecución
Construir y ejecutar:
```bash
docker compose up -d --build
```

Abrir http://localhost:8080 en el navegador.

Detener:
```bash
docker compose down
```
