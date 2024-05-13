const mongoose = require("mongoose");
require("dotenv").config();

// mongodb+srv://sarthaksarthi:<password>@cluster0.aukbsja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.aukbsja.mongodb.net/MernChatApp?retryWrites=true&w=majority&appName=Cluster0`
);
console.log("Mongodb connected");
