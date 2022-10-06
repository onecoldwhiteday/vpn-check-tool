FROM node:16-buster as base

WORKDIR /home/node/app
ADD package*.json .

RUN yarn

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build