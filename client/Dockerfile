# Use the official Node.js 18 image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client files to the container
COPY . .

# Expose the port on which the React development server runs (default is 3000)
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]