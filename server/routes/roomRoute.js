import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createRoom,
  getOwnerRooms,
  getRooms,
  toggleAvailability,
} from "../controller/roomController.js";
import upload from "../middleware/uploadMiddleware.js";

const roomRouter = express.Router();

roomRouter.post("/", upload.array("images", 4), protect, createRoom);
roomRouter.get("/", getRooms);
roomRouter.get("/owner", protect, getOwnerRooms);
roomRouter.post("/toggle-availability", protect, toggleAvailability);

export default roomRouter;
