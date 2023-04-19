FROM node:alpine

WORKDIR /dockernodejs

COPY package*.json ./
 RUN npm install
 COPY . .

 EXPOSE 3000

 CMD [ "npm", "start" ]