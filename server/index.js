const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors') 
const mongoose  = require('mongoose')

// DB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('database connected'))
.catch((err) => console.log('database not connected', err))

const app = express();

// middleware
app.use(express.json());

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log('server is running'))