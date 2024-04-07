# NestJs Auth Service

This is a basic nestJs service for managing auth flow. Using prisma as our ORM and Passport (local + jwt strategies).

## Key Features

- User creation

- User login with passport
- User auth with credentials
- Jwt creation with user credentials
- Protected routes validating Jwt

## Run Locally

Clone the project

```bash
  git clone https://github.com/samuelborraccini/nestPassportAuth.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Create .env file and complete data

```bash
  cp .env.example .env
```

Run prisma migrations if necessary

```bash
  npx prisma migrate dev
```

Start the server

```bash
  npm run start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
