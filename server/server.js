import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

import connectDB from "./utils/connectDB.js";

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
    connectDB();
});