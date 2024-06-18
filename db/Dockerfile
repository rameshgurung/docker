# Use an official MySQL image as the base image
FROM mysql:latest AS db

# Set the working directory inside the container
WORKDIR /docker-entrypoint-initdb.d

# Copy the SQL initialization script
COPY ./init.sql .