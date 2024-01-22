FROM node:16

WORKDIR /app

COPY . /app

RUN npm install 

CMD ["npm" ,"install" ,"-g", "node-gyp"]
CMD ["npm" ,"install" ,"bcrypt"]

CMD ["npm", "run", "start"]
