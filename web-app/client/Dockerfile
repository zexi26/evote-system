FROM node:10

WORKDIR /usr/src/app

COPY . .

RUN [ "npm", "install" ]
RUN [ "npm", "install", "--save", "vue-apexcharts" ]
RUN [ "npm", "install", "--save", "apexcharts" ]

RUN [ "npm", "audit", "fix" ]

ENTRYPOINT [ "npm", "run", "serve" ]
