import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

import connectDB from "./utils/connectDB.js";
import authRoutes from "./routes/auth_routes.js";
import productRoutes from "./routes/product_routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
    connectDB();
});