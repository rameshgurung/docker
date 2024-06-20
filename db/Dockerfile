# Use an official MySQL image as the base image
FROM mysql:8.4.0

# Set the working directory inside the container
WORKDIR /docker-entrypoint-initdb.d

# Copy the SQL initialization script
COPY ./init.sql .

# Ensure correct permissions
# RUN chmod -R 755 /docker-entrypoint-initdb.d