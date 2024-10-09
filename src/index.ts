import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./presentation/routers/user.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});