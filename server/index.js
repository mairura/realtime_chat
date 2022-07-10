const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;

const authRoutes = require("./routes/auth");

//Middleware - Cross-Origin Resource
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//Environmental variables
require('dotenv').config();

//Route
app.get('/', (req, res) => {
    res.send("Front Row")
});

app.use('./auth', authRoutes);

//Server Setup
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
}); 