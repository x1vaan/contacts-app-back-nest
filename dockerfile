FROM node:18

WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
