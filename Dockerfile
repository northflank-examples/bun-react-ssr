# Use the official Bun image
FROM oven/bun:1.2

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN bun install

# Expose the app port
EXPOSE 3001

# Start the Bun app (adjust if your entry file is different)
CMD ["bun", "index.tsx"]