import dotenv from "dotenv";
import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(join(__dirname, "public", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(join(__dirname, "public", "contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "public", "404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`);
});
