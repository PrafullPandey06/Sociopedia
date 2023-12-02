FROM node:17-alpine

ARG PORT
WORKDIR /app
COPY package.json .

RUN apk add --no-cache xdg-utils curl && \
    npm install

COPY . .
ENV PORT=$PORT

EXPOSE 6002
CMD ["npm", "run", "dev"]
