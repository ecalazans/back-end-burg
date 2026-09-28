import express, { type Request, type Response } from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "./src/routes.js";
import cookieParcer from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParcer());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(router);

connection();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
