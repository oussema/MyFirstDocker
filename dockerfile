# Use an official node runtime as a parent image
FROM node
WORKDIR /app
ADD . /app
ADD /views /app
RUN npm install express
RUN npm install ejs
CMD ["node", "server.js"]