# mescla-backend

The Mescla backend.

## Stack

- [Nest.js](https://nestjs.com/)
- [Passport.js](http://www.passportjs.org/)
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [OpenAPI](https://www.openapis.org/)

## Installation

```bash
git clone git@github.com:mescla-io/mescla-backend.git
cd mescla-backend
```

Create environment variable files `.env` and `.env.dev` based on [.env.example](./.env.example) on project root folder

```bash
cp .env.example .env
cp .env.example .env.dev
```

Install dependencies

```bash
yarn install # or just yarn
```

Generate prisma client types

```bash
yarn prisma:generate # or npx prisma generate
```

## Running on development environment

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

Start Postgres with Docker by using

```bash
yarn docker:dev:db # or docker compose --env-file .env.dev -f docker-compose.db.yml up -d
```

> ⚠ Note that the loaded environment variables file is `.env.dev`

Once the database is running you can create the tables using Prisma migrations

```bash
yarn migrate:dev
```

After the previous steps we can run our application in a development environment

```bash
yarn start:dev
```

> ⚠ Note that the loaded environment variables file is `.env.dev`

## Running on production environment

### With Docker

To create the application image and run it along with the database, just run

```bash
yarn docker # docker compose up -d
```

Or to stop running containers and rebuild cached images

```bash
yarn docker:up:build # docker compose up -d --build
```

Once the database is running you will need to update / create your structure using prisma migration deploy

```bash
yarn docker:db:init
```

To see output logs use

```bash
yarn docker:logs # or docker compose logs -f
```

> ℹ <kbd>Ctrl</kbd> + <kbd>C</kbd> to stop watching logs

### Without Docker (Local)

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

Start Postgres with Docker by using

```bash
yarn docker:db
```

> ⚠ Note that the loaded environment variables file is `.env`

Once the database is running you will need to update / create your structure using prisma migration deploy

```bash
yarn docker:db:init
```

After the previous steps we can run our application in a production mode environment

```bash
yarn start:prod:local
```

> ⚠ Note that the loaded environment variables file is `.env`
