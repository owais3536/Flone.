import mongoose, { Schema } from "mongoose";

const cartSchema = Schema(
    {
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        quantity: Number,
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;