import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

app.get("/", (req, res) => {
    res.send("Working!");
})

app.listen(8080, () => console.log("Server running on localhost:8080"));