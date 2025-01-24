// require packages
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import morgan from 'morgan';
const app = express();
import path from 'path';
import cors = require('cors');

// import models


// set up port
const port = process.env.PORT ? process.env.PORT : 3003;

// connect to database
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json()); // use json
app.use(express.urlencoded({extended:false})); // allows us to use req.body
app.use(express.static(path.join(__dirname, "public"))); // allows us to use static files from directory
app.use(methodOverride("_method")); // allows us to update and delete forms
app.use(morgan("dev")); // use morgan for debugging
app.use(cors()); // allows us to use cors