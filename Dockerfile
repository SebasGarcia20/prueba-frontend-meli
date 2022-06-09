# Enviroment
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install 
RUN npm install concurrently

# add app
COPY . ./

# start app
CMD ["npm", "start", "dev"]