const express = require('express');
const connectDB = require("./database/db");
const path = require('path');
const app = express();

require("dotenv").config();
connectDB();

const auth = require('./Routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',auth)

//testing 
app.use(express.static(path.join(__dirname, '')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});









