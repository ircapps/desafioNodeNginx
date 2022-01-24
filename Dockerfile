FROM node:15 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

EXPOSE 3000
COPY . .
CMD ["node", "index.js"]

