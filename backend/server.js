const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/footprint", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/activity", require("./routes/activityRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
