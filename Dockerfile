FROM node

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

ENV DB_USERNAME=user
ENV DB_PASSWORD=password
ENV DB_DATABASE=db_test_api
ENV DB_HOST=localhost
ENV DB_DIALECT=mysql
ENV DB_PORT=3306
ENV NODE_ENV=production

CMD ["npm", "start"]
