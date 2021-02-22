// Include dotENV
require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Connect to DB
mongoose.connect(process.env.DB, { useUnifiedTopology: true }, () => {
	console.log("Connect to db ! Wouhou");
});

// Import route
const authRoute = require("./routes/auth/auth");
const postRoute = require("./routes/posts/posts");

// Middleward
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

// App running
app.listen(PORT, () => {
	console.log(`App is running on port: ${PORT}`);
});
