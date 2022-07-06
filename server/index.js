import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import pageRoutes from "./routes/pages.js";
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", pageRoutes);
app.use("/auth", userRoutes);
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${5000}`))
  )
  .catch((error) => console.log(error.message));
