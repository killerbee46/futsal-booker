import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import apiRoutes from "./routes/apiRoutes.js";
import authRoutes from "./routes/authRoute.js";
import futsalRoutes from "./routes/futsalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import colors from 'colors';
import cors from "cors";
import { responseEnhancer } from "express-response-formatter";
import multer from "multer";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(responseEnhancer())
app.use(multer)

//routes

// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send(`<h3>Api server is running</h3> <a href="/api"><button>Go to Api</button></a>`)
});

app.use("/api", apiRoutes);
app.use("/auth", authRoutes);
app.use("/api/futsal", futsalRoutes);
app.use("/api/user", userRoutes);
app.use("/upload", uploadRoutes);

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
