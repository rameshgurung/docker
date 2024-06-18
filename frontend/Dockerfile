# Use a lightweight base image for the frontend
FROM nginx:alpine
# Set the working directory inside the container
WORKDIR /usr/share/nginx/html
# Copy the frontend code
COPY ./index.html .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf