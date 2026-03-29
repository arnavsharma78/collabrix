import express from "express";
import { ENV } from "./config/env.js";

const app = express();

const PORT = ENV.PORT;
app.get("/", (req, res) => {
  res.send("This is the page for your get request of '/' path");
});
app.listen(PORT, () => {
  console.log(`SERVER STARTED on port ${PORT}`);
});
