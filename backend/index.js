import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import CityRoutes from "./Routes/CityRoutes.js";

const server = express();
server.use(cors());
server.use(express.json());
dotenv.config({ path: "./.env" });

const _dirname = path.resolve();

server.use("/api", CityRoutes)

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(_dirname, "/frontend/dist")));

  server.get("*", (req, res) => {
      res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
  });
}

const port = process.env.PORT || 8001;
server.listen(port, () => {
    connectDB();
  console.log(`Server is running on port ${port}`);
});
