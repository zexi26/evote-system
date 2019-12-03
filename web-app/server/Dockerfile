FROM node:10

COPY . .

RUN npm install
RUN npm install -g increase-memory-limit
RUN increase-memory-limit

ENTRYPOINT [ "npm", "start" ]
