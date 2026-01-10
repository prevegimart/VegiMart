import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Contact from "./userModel/userModel.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => {
  console.error("Connection error:", err.message);
  process.exit(1);
});

app.post("/api/contact", async (req, res) => {
    console.log(req.body);
    
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
