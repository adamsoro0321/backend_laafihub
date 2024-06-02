FROM node:21.6.2

LABEL version="1.0" maintainer="AJDAINI Hatim <ajdaini.hatim@gmail.com>"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000

CMD ["node", "App.js"]