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
  res.send("Welcome to Assignment 2 Server site");
});

export default app;
