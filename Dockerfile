FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build


FROM node:lts-alpine AS development-stage
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY . .
RUN npm install
ENV NODE_ENV=development
EXPOSE 3003
CMD ["npm", "run", "dev"]


FROM node:lts-alpine AS production-stage
WORKDIR /app
COPY --from=builder /app/.output /app/.output
ENV NITRO_PORT=3003
ENV NODE_ENV=production
EXPOSE 3003
CMD ["node", ".output/server/index.mjs"]
