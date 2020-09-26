FROM node:alpine

WORKDIR /app

COPY src src
COPY package.json .
COPY tsconfig.json .

RUN npm install

CMD ["npm", "start"]