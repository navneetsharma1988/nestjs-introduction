FROM node:lts-alpine3.18

ENV port=3000

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm build

EXPOSE 3010

CMD ["npm", "run", "start:prod"]