# BUILDER
FROM node:lts-alpine AS builder
WORKDIR /var/app

COPY package.json yarn.lock ./
COPY prisma ./prisma/
RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn prisma:generate

RUN yarn build

# RUNNER
FROM node:lts-alpine AS runner
WORKDIR /var/app

COPY package.json yarn.lock ./

ARG NODE_ENV=production
ENV NODE_ENV=production

RUN yarn install --frozen-lockfile && yarn cache clean

COPY --from=builder /var/app/ ./

RUN adduser -S app
USER app

EXPOSE 5000

ENTRYPOINT ["/var/app/init.sh"]