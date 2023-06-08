FROM node:lts-alpine3.18

ENV port=3000

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN tsc -p ./tsconfig.json

EXPOSE 3000

CMD ["npm", "run", "start:prod"]