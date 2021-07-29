const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./models/userModel");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js')); 

app.listen(PORT, () => {
console.log(`App running on port ${PORT}!`);
});