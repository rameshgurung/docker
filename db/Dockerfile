# Use an official MySQL image as the base image
FROM mysql:8.4.0

# RUN mkdir -p /var/lib/mysql && chown -R mysql:mysql /var/lib/mysql
# RUN mkdir -p /etc/mysql/conf.d && chown -R mysql:mysql /etc/mysql

# Set the working directory inside the container
WORKDIR /docker-entrypoint-initdb.d

# Copy the SQL initialization script
COPY ./init.sql .