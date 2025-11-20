import mongoose from "mongoose";

async function connectDB() {
    const URI = process.env.MONGODB_URI;
    mongoose.connect(URI)
        .then(() => console.log("connected to database"))
        .catch((error) => console.log(error));
}

export default connectDB;