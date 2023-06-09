# node (builder)
FROM node:16-alpine AS builder
WORKDIR /usr

# For cache package.json and package-lock.json when package.json is not changed
COPY ./package* ./
RUN npm install

COPY ./ ./
RUN npm run build

# nginx
FROM nginx:1.23.2-alpine
COPY --from=builder /usr/dist/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY deploy/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]