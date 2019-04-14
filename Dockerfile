FROM node:8-alpine

WORKDIR /usr/src/brentsoles.com
COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 8080
CMD ["npm", "start"]