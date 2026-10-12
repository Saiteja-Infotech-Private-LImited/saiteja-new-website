# Stage 1: build the Vite React app
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html vite.config.js ./
COPY public ./public
COPY src ./src

RUN npm run build


# Stage 2: serve static files and reverse-proxy /api
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Configure writable paths for non-root Nginx

RUN sed -i \
    -e 's|/run/nginx.pid|/tmp/nginx.pid|' \
    -e 's|/var/run/nginx.pid|/tmp/nginx.pid|' \
    -e 's|/var/cache/nginx|/tmp/nginx-cache|' \
    /etc/nginx/nginx.conf && \
    mkdir -p /tmp/nginx-cache/client_temp \
             /tmp/nginx-cache/proxy_temp \
             /tmp/nginx-cache/fastcgi_temp \
             /tmp/nginx-cache/uwsgi_temp \
             /tmp/nginx-cache/scgi_temp && \
    chown -R nginx:nginx /tmp/nginx-cache /usr/share/nginx/html

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
