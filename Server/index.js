import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import connectDb from "./mongodb/connect.js";
import dalleRoutes from "./routers/dalleRoutes.js";
import postRoutes from "./routers/posrtRoutes.js";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("server has started on port http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
