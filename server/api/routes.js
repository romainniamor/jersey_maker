import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

const router = express.Router();

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to CREATE JERSEY API endpoints!" });
});

router.post("/dalle", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    console.log("response:", response);

    const image = "data:image/png;base64," + response.data[0].b64_json;

    res.status(200).json({ image });
  } catch (error) {
    console.log("error /dalle post => ", error);
    res.status(500).json({ message: `Error post dalle => ${error}` });
  }
});

export default router;
