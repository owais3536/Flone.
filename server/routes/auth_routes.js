import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/auth_model.js";
import { protectedRoute } from "../utils/middleware.js";

const router = Router();

// registeration
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

        const hashedPassword = await bcrypt.hash(password, 10);

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
                cart: user.cart,
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

// sign in
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({
                error: true,
                message: "All fields are required",
            });
        }

        const isUser = await User.findOne({ email });

        if (!isUser) {
            return res.status(404).json({
                error: true,
                message: "No user found with this Id",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, isUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                error: true,
                message: "Invalid credentials",
            });
        }

        const accessToken = jwt.sign(
            { userId: isUser._id, role: isUser.role },
            process.env.SECRET_KEY,
            { expiresIn: "72h" },
        );

        res.status(200).json({
            error: false,
            message: "Sign in successful",
            user: {
                name: isUser.name,
                email: isUser.email,
                role: isUser.role,
            },
            accessToken,
        })

    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message,
        })
    }
});

export default router;