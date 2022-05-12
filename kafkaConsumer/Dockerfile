FROM node:14

WORKDIR /kafkaConsumer

COPY package.json .

RUN npm install && npm i -g nodemon

COPY . .

ENTRYPOINT [ "nodemon" ]
CMD [ "--legacy-watch", "app.js" ]