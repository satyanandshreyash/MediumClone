
# Medium Clone

This project is a simple, scalable, performant and secure clone of popular blogging website Medium built using modern tech stack.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Common npm Package](#common-npm-package)
- [Setup](#setup)
- [Usage](#usage)
- [Deployments](#deployments)
- [Contributing](#contributing)

## Description
A simple blogging website where users can signup and start writing or browse blogs written by others

## Features
- Secure JWT-based authentication.
- Serverless backend wrote on Cloudflare workers for low-latency and scalability
- Robust data validation and type safety
- Static type checking using pakage published on npm registry
- Seamless database interactions and performance optimizations
- Responsive web design

## Technologies used
- **Programming Language**: TypeScript
- **Frontend**: React
- **Backend**: Cloudflare Workers
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation Library**: zod

## Common npm Package

- **Type checking**: A common npm module has been implemented and published to the npm registry to import schemas, zod validation and type inference in both backend and frontend to ensure consistency and reusability across the application.

## Setup
1. **Prerequisites**
- Node.js (version 14 or higher)
- PostgreSQL (cloud instance from **Neon** or other providers)
- Prisma Accelerate (connection pool url using database url from above)

2. **Clone the Repository**

```bash
git clone https://github.com/satyanandshreyash/MediumClone.git
cd MediumClone
```

3. **Backend setup**
- **Navigat to Backend directory:**

```bash
cd backed
```

- **Install dependencies:**

```bash
npm install
```

- **Create a .env file in the backend directory and add your PostgreSQL database URL**

```makefile
DATABASE_URL="YOUR_POSTGRESQL_CLOUD_INSTANCE"
```

- **Edit the `wrangler.toml` file**
```makefile
[vars]
DATABASE_URL="your_connection_pool_url"
JWT_SECRET="your_jwt_secret"
```

- **Start the server:**

```bash
npm run dev
```

4. **Frontend setup**
- **Navigate to Frontend directory:**

```bash
cd frontend
```

- **Install dependencies:**

```bash
npm install
```

- **Create a .env file in the Frontend directory and add your environment varialbles. Example:**

```makefile
VITE_BACKEND_URL=http://localhost:8787
```
**Note:** PORT(8787) should be same as mentioned in .env file present in Backed directory

- **Start the React App:**
```bash
npm run dev
```
## Usage

1. Open the application in your browser (http://localhost:5173)
2. Register a new user or log in with existing credentials.
3. Use the interface to view blogs posted by others or post your own blogs for others to see.

## Deployments
1. Frontend deployed at: https://satyanand-shreyash-medium.vercel.app/
2. Backend deployed at: https://backend.satyanandshreyash.workers.dev/
3. Common npm pakage published at: https://www.npmjs.com/package/@satyanand_shreyash/medium-common

## Contributing

Feel free to open issues or submit pull requests to contribute to this project. Please ensure to follow the coding standards and provide descriptive commit messages.
