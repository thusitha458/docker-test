FROM mongo:4.1.1

# Create app directory
WORKDIR /home/mongo

# Create db directory
# RUN mkdir data

# Create log file
RUN mkdir logs
RUN touch logs/mongo.log
 
# Expose port 27017
EXPOSE 27017

# Run mongod
CMD ["/usr/bin/mongod",  "--dbpath", "data", "--logpath", "logs/mongo.log", "--bind_ip_all"]
