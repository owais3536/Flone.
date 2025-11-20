import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: { type: String, required, },
        email: { type: String, required, uniqure, },
        password: { type: String, required, },
        role: {
            type: String,
            enum: ["admin", "user"],
            required,
            default: "user"
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;