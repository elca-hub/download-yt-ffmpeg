FROM node:12-slim

COPY . .

RUN npm install && apt-get update && apt-get -y upgrade && apt-get -y install ffmpeg

CMD ["node", "./server.js"]