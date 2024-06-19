# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/share/app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install dependencies, including the additional 'mysql' library
# RUN npm config set registry http://registry.npmjs.org/

RUN npm config set proxy http://103.5.229.10:8080
RUN npm config set https-proxy http://103.5.229.10:8080
RUN npm config set ca null
RUN npm config set strict-ssl false

# # Debug step to check npm configuration and network connectivity
# RUN npm config list \
#  && npm ping

RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your application will run on
EXPOSE 3000

# Command to run your application
# CMD ["npm", "start"]
# CMD ["npx", "dev"]
CMD ["npx", "nodemon", "src/app.js"]
# CMD ["npx", "nodemon", "app.js"]