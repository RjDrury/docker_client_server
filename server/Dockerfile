# Use the official Node.js 14 image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /server

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server files to the container
COPY . .

# Expose the port on which the NestJS server runs (default is 8000)
EXPOSE 8000
EXPOSE 9229

RUN npm run build
# Start the server in development mode
CMD [ "node", "dist/main" ]


