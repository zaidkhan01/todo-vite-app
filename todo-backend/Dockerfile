# Dockerfile for todo-backend
FROM node:16-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the application port (not necessary to expose 3000 in this case)
# EXPOSE 3000  # Remove this line

# Command to run the application in production mode
CMD ["npm", "run", "start:prod"]
