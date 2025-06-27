import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    mongoose.connection.on("error", (err) => console.error("❌ MongoDB Error:", err));
    mongoose.connection.on("disconnected", () => console.log("⚠️ MongoDB Disconnected"));

    await mongoose.connect(`${process.env.MONGODB_URL}/hotel-booking`);
  } catch (error) {
    console.error("❌ Connection Failed:", error.message);
  }
};

export default connectDB;
