import { Router } from "express";
import { unlink } from "node:fs/promises";

import upload from "../utils/multer.js";
import Product from "../models/product_model.js";
import { adminRoute, protectedRoute } from "../utils/middleware.js";

const router = Router();

// create product
router.post(
    "/create-product",
    protectedRoute,
    adminRoute,
    upload.array('images', 3),
    async (req, res) => {
        try {
            const {
                name,
                originalPrice,
                discountPrice,
                details,
                colors,
                sizes,
            } = req.body;

            const { userId } = req.user;

            const parsedColors = typeof colors === "string" ? JSON.parse(colors) : colors;
            const parsedSizes = typeof sizes === "string" ? JSON.parse(sizes) : sizes;
            const parsedDetails = typeof details === "string" ? JSON.parse(details) : details;

            if (
                !name ||
                !originalPrice ||
                !Array.isArray(parsedColors) ||
                !Array.isArray(parsedSizes) ||
                !Array.isArray(parsedDetails)
            ) {
                return res.status(400).json({
                    error: true,
                    message: "Missing or Invalid fields",
                });
            }

            const imagePaths = req.files.map((file) => file.path);

            const product = new Product({
                name,
                originalPrice,
                discountPrice,
                images: imagePaths,
                colors: parsedColors,
                sizes: parsedSizes,
                details: parsedDetails,
                user: userId
            });

            await product.save();

            res.status(201).json({
                error: false,
                message: "Product created successfully",
                product,
            });
        } catch (error) {
            res.status(500).json({
                error: true,
                message: error.message,
            });
        }
    }
);

// upload images
router.post("/upload-image", protectedRoute, adminRoute,
    upload.array("images", 4),
    async (req, res) => {
        try {
            const path = "http://localhost:8080/";
            const imagePaths = req.files.map((file) => path + file.filename);

            if (!imagePaths) {
                return res.status(404).json({ message: "Missing image filed" });
            }

            res.status(201).json({ imagePaths });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

// delete product + images
router.delete(
    "/delete/:productId",
    protectedRoute,
    adminRoute,
    async (req, res) => {
        try {
            const { productId } = req.params;
            const { userId } = req.user;
            const product = await Product.findOne({ _id: productId, user: userId });

            if (!product) {
                return res.status(404).json({
                    message: "No product found!"
                });
            }

            await Promise.all(
                product.images.map(img =>
                    unlink(img).catch(err =>
                        console.log("Failed to delete:", img, err))
                )
            );

            await Product.findByIdAndDelete(productId);

            res.json({ message: "Product deleted" });
        }
        catch (error) {
            res.status(500).json({ message: "Server error" });
        }

    }
);

// get product details
router.get("/get-all-product", async (req, res) => {
    try {
        const product = await Product.find();
        console.log(product);

        if (!product) return res.status(404).json({ error: true, message: "No product found!" });

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: "Internal server error",
        });
    }
});

export default router;