FROM node:10

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install -g increase-memory-limit
RUN increase-memory-limit

ENTRYPOINT [ "npm", "start" ]
