import express from "express";
import connectDB from "./config/database";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api", routes);

app.get("/", (_req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const ipAddress = "0.0.0.0";
app.listen(PORT, ipAddress, () =>
  console.log(`Server running on <http://localhost>:${PORT}`)
);
