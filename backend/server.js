require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const routesUrls = require('./routes/signuproutes')
const epayroutesUrls = require('./routes/epayroutes')
const signInroutesUrls = require('./routes/signinroutes')
const loggedinRoutes = require('./routes/loggedindashboardroutes')

const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
app.use('/signup', routesUrls)
app.use('/signin', signInroutesUrls)
app.use('/transactionpage', epayroutesUrls)
app.use('/loggedindashboard', loggedinRoutes)

mongoose.connect(process.env.MONGO_URI, () => console.log("Database connected"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))