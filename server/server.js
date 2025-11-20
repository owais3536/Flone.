import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./utils/connectDB.js";
import authRoute from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

app.use("/api/auth", authRoute);

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
    connectDB();
});