import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./utils/connectDB.js";
import authRoutes from "./routes/auth_routes.js";
import productRoutes from "./routes/product_routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
    connectDB();
});