import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import pageRoutes from "./routes/pages.js";
import userRouter from "./routes/user.js";
import * as path from "path";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", pageRoutes);
app.use("/auth", userRouter);

const url = process.env.MONGODB;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
