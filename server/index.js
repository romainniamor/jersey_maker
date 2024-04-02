import express from "express";
import dotenv from "dotenv";
import routes from "./api/routes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
