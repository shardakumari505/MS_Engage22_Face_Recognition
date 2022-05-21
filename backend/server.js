require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const connectDB = require("./config/db");
const routesUrls = require('./routes/signuproutes')
const epayroutesUrls = require('./routes/epayroutes')
const signInroutesUrls = require('./routes/signinroutes')
const productRoutes = require('./routes/productRoutes')

const cors = require('cors')
connectDB();

const app = express();
app.use(express.json());
app.use(cors())
app.use('/signup', routesUrls)
app.use('/signin', signInroutesUrls)
app.use('/transactionpage', epayroutesUrls)

app.use('/api/products', productRoutes)
mongoose.connect(process.env.MONGO_URI, () => console.log("Database connected"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))