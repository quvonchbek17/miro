import express, { Application } from "express";
import { errorHandler } from "@middlewares";
import cors from "cors";
import router from "./routes";
import dotenv from "dotenv";
import { AuthController } from "@modules";
dotenv.config();

const app: Application = express();

//// cors
app.use(cors({ origin: "*" }));

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1",router);
app.use("/", AuthController.getAuthUrl)

app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(port);
});
