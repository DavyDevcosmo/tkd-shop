# Etapa de build
FROM node:20 AS builder
WORKDIR /app

# Instala as dependências do sistema necessárias para o Prisma
RUN apt-get update && apt-get install -y openssl

COPY package*.json ./
COPY prisma ./prisma

# Instala as dependências incluindo as necessárias para build
RUN npm install
RUN npx prisma generate

COPY . .

# Build da aplicação
RUN npm run build

# Etapa final
FROM node:20 AS runner
WORKDIR /app

# Instala as dependências do sistema necessárias para o Prisma
RUN apt-get update && apt-get install -y openssl

# Copia apenas os arquivos necessários da build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.js ./


# Gera o cliente do Prisma na imagem final
RUN npx prisma generate

EXPOSE 3000
CMD ["npm", "start"]