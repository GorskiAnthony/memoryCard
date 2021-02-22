require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const DB = process.env.DB;

// Connect to DB
mongoose.connect(DB, { useUnifiedTopology: true }, () => {
	console.log("Connect to db ! Wouhou");
});

// import route
const authRoute = require("./routes/auth");

// route middleward
app.use(express.json());
app.use("/api/user", authRoute);

// App running
app.listen(PORT, () => {
	console.log(`App is running on port: ${PORT}`);
});
