import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";

// Parsers:
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Assignment 2 Server</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .container {
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
          display: flex;
          gap: 1.5rem;
        }
        a {
          text-decoration: none;
          color: #007BFF;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Assignment 2 Server</h1>
        <p>Explore the following API routes:</p>
        <ul>
          <li><a target="_blank" href="/api/users">GET /api/users</a> - Get all users</li>
          <li><a target="_blank" href="/api/users/1">GET /api/users/:userId</a> - Get a single user</li>
          <li><a target="_blank" href="/api/users/2/orders">GET /api/users/:userId/orders</a> - Get all orders for a user</li>
          <li><a target="_blank" href="/api/users/2/orders/total-price">GET /api/users/:userId/orders/total-price</a> - Get total price of orders for a user</li>
          <!-- Add more API routes as needed -->
        </ul>
      </div>
    </body>
    </html>
  `);
});

export default app;
