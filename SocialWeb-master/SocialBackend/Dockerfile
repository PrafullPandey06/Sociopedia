FROM node:17-alpine
ARG MONGO_URL
ARG PORT
ARG JWT_SECRET
RUN npm install -g nodemon

WORKDIR /app
COPY package.json .
RUN npm install

COPY . .
ENV MONGO_URL=$MONGO_URL
ENV PORT=$PORT
ENV JWT_SECRET=$JWT_SECRET
EXPOSE 3001

CMD ["nodemon", "index.js"]