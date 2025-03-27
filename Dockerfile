FROM node:20-alpine as builder
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist/ ./dist
COPY server/ ./server

RUN npm ci --prefix ./server

CMD npm run start --prefix ./server
