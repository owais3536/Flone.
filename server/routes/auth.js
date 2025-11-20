import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ error: true, message: "All fields are required" });
        }

        const isUser = await User.findOne({ email });

        if (isUser) {
            return res
                .status(400)
                .json({ error: true, message: "User already exists with this email" });
        }

        hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();

        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "72h" }
        );

        res.status(201).json({
            error: false,
            message: "User created successfully",
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
            accessToken,
        })
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message,
        });
    }
});

export default router;