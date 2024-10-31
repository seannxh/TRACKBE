const express = require('express');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const TrackRouter = require('./controllers/track')


mongoose.connect(process.env.MDBURL)

mongoose.connection.on("connected", () => {
    console.log(`Connected to mongoose ${mongoose.connection.name}`)
})

app.use(cors());
app.use(express.json());
app.use(methodOverride());
app.use(morgan());
app.use('/tracks', TrackRouter)

  

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server is lived")
});