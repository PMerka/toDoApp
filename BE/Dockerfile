# Use a lightweight Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Deploy migrations
RUN npx prisma migrate deploy

# Expose the port your app runs on
EXPOSE 3001

# Start the app
CMD ["node", "index.js"]