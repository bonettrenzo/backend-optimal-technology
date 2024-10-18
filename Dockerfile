ARG NODE_VERSION=16.17.0
FROM node:${NODE_VERSION}-slim as base
## nombre de la imágen
LABEL fly_launch_runtime="NodeJS" 

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8021

CMD ["npm", "start"]
