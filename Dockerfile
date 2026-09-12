FROM node:22-alpine
WORKDIR /srv
COPY package*.json ./
RUN npm ci
COPY tsconfig.json ./
COPY src ./src
COPY test ./test
RUN npm test
RUN npm run build
EXPOSE 3000
CMD ["node","dist/main.js"]
