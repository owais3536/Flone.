import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        originalPrice: {
            type: Number,
            required: true,
            min: 0,
        },
        discountPrice: {
            type: Number,
            min: 0,
        },
        images: {
            type: [String],
            required: true,
        },
        colors: {
            type: [String],
            required: true,
            default: [],
        },
        sizes: {
            type: [String],
            required: true,
            default: [],
        },
        details: {
            type: [String],
            required: true,
            default: [],
        },
        units: {
            type: Number,
            min: 0,
        },
        category: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;