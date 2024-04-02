import express from "express";
import dotenv from "dotenv";

const router = express.Router();

dotenv.config();

router.get("/create-jersey", (req, res) => {
  res.json("Welcome to CREATE JERSEY API endpoints!");
});

export default router;
