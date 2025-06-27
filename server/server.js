import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controller/clerkWebHooks.js";
import userRouter from "./routes/userRoutes.js";

connectDB();

const app = express();
app.use(cors()); //Enbale Cross-Origin Resource Sharing

//Middleware
app.use(clerkMiddleware());
app.use(express.json());

//API to listen to Clerk Webhook
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working"));
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
