FROM node:v20.5.1

COPY . /ENTERTINMENT-HUB

RUN npm install

CMD ["node", "app.js"]