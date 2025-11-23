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
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;