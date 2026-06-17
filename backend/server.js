import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import applyRoute from "./routes/applyRoute.js";
import contactRoute from "./routes/contactRoute.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/jobs", applyRoute);
app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("ChronoHire API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});