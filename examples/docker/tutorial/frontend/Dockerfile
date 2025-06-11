FROM node:18 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine AS serve

ENV VITE_BACKEND_PING_URL=http://localhost:8080/ping

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
