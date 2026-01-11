// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const authRoutes = require("./routes/auth");

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// app.use("/api/auth", authRoutes);

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();


app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Atlas connected"))
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
    process.exit(1);
  });

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

