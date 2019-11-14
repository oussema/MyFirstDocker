# Use an official node runtime as a parent image
FROM node
WORKDIR /app
ADD . /app
ADD /views /app
RUN npm install express
RUN npm install ejs
RUN npm install request
# Expose port
EXPOSE 8080
CMD ["node", "server.js"]
