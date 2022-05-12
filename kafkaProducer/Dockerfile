FROM node:14

WORKDIR /kafkaProducer

COPY package.json .

RUN npm install && npm i -g nodemon

COPY . .

ENTRYPOINT [ "nodemon" ]
CMD [ "--legacy-watch", "app.js" ]