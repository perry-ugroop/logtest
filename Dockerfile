FROM ubuntu:17.10
RUN apt-get update && apt-get install -y vim curl build-essential
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

WORKDIR /var/logtest
RUN mkdir -p logs
COPY .babelrc .
COPY config.js .
COPY index.js .
COPY package.json .
COPY package-lock.json .
COPY utils.js .
COPY views/index.js ./views/
RUN npm install

EXPOSE 4001
VOLUME ['/var/logtest/logs']

CMD npm run start

