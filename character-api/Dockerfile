FROM node:14
WORKDIR .
COPY package*.json ./
RUN yarn
COPY . .
CMD ["node", "app.js"]