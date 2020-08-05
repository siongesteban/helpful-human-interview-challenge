# API Server

A GraphQL API server built with NestJS.

## Setup
1. Create `.env` file.
```
PORT=8080
NODE_ENV="local"
```
2. Create `prisma/.env` file.
```
DATABASE_URL="postgresql://user:password@172.17.0.3:5432/swatch?schema=public"
```
3. Run database migrations.
```bash
npx prisma migrate up --experimental
```
4. Install the packages.
```bash
yarn
```
5. Generate Prisma client.
```bash
npx prisma generate
```
6. Seed the database.
```bash
yarn db:seed
```

## Running Locally
```bash
yarn start:dev
```

## GraphQL Playground
The GraphQL Playground can be accessed at `http://localhost:<port>/graphql`
