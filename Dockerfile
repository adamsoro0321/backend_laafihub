FROM node:21.6.2

LABEL version="1.0" maintainer="SORO Adam <adamsoro0321@gmail.com>"
ENV NODE_ENV production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000

CMD ["npm", "start"]