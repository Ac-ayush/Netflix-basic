//Step 1 : create server
// const express = require('express');
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import databaseConnection from './Database/database.js';
import userRoute from './routes/userRoute.js'
import cors from 'cors'

const app = express();

databaseConnection();       //connect DB


dotenv.config({         //seting env variables
    path: '.env'
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`)
})

//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOption));

//API
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello, I am Home of Backend",
        success: true
    })
})

app.use('/api/v1/user', userRoute)  //domain/api/v1/user/register