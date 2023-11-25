# Assignment-2

This is a TypeScript-based project built with Express and MongoDB. Below are the instructions to run the application locally.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v7 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running locally on the default port `27017`)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Wixden/mongoose-CRUD.git
   ```

2. Navigate to the project directory:

```bash
cd assignment-2
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file in the project root and configure your environment variables. You can use the .env.example file as a template. Replace your-database-name and your-secret-key with your desired values.

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your-secret-key
```

5. Build the project:

```bash
npm run build
```

6. Start the development server: This command will start the server using ts-node-dev, which allows automatic transpilation and restart on file changes.

```bash
npm run start:dev
```

7. Access the application in your browser or through API testing tools like Postman. The default URL is http://localhost:5000.

## Available Scripts

- start:prod: Start the server in production mode using nodemon. Run npm run start:prod.

- build: Transpile TypeScript files to JavaScript. Run npm run build.

- lint: Run ESLint to check for linting issues. Run npm run lint.

- lint:fix: Run ESLint and automatically fix fixable issues. Run npm run lint:fix.

- prettier: Run Prettier to format code. Run npm run prettier.

- test: No tests are specified in the template. You can add your tests here. Run npm test.

## Notes

- The project uses dotenv for environment variable management. Make sure to configure your .env file properly.

- The application is built with TypeScript, and the source code is in the src directory. The transpiled JavaScript code is in the dist directory.

- MongoDB is used as the database. Make sure MongoDB is installed and running locally on the default port (27017). Update the MONGODB_URI in your .env file accordingly.

- The project includes basic setup for CORS, bcrypt for password hashing, and validation using zod.
