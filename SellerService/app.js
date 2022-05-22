const express = require('express');
const env = require("dotenv");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());
env.config();

const PORT = process.env.PORT || 5004; 

mongoose.connect("mongodb+srv://chandula:notpassword@cluster0.orv2t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}, () => { console.log("Database connected") });

const sellerRoute = require('./src/controller/sellerController');
const authRoute = require('./src/controller/authenticationController');

app.listen(PORT,() => console.log(`Server Started on port: ${PORT}`));

app.get("/", (req, res) => {
  res.send("seller is running in the cloud!");
});

app.use('/api/sellers', sellerRoute);
app.use('/api/sellerauth', authRoute);