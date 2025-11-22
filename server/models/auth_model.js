import mongoose, { Schema } from "mongoose";

const userSchema = Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user"
        },
        cart: { type: Schema.Types.ObjectId, ref: "Cart" },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;