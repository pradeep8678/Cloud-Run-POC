# Use a lightweight Node.js base image
FROM node:20-slim

# Create and change to the application directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy local code to the container image
COPY . .

# Run the web service on container startup
CMD [ "npm", "start" ]
