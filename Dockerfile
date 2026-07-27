# Multi-Stage Build for Production-Ready SaaS
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for caching layers
COPY package.json package-lock.json ./
RUN npm ci

# Copy codebase and config
COPY . .

# Build Vite client, SSR server and Nitro server
ENV NODE_ENV=production
RUN npm run build

# --- Runner stage ---
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose Nitro default port
EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production

# Start application server
CMD ["node", "dist/server/index.mjs"]
