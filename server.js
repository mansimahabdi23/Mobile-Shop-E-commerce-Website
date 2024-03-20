import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';



let corsAllow = {
  origin: "http://localhost:3000",
  methods: "PUT, GET, POST, PATCH, DELETE, HEAD",
  credentials: true,
};

//configure env
dotenv.config();

//database config
connectDB();


//rest object
const app=express();


//middlewares
app.use(cors(corsAllow));
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/products', productRoutes);
 

//rest api
app.get("/", (req,res) => {
    res.send('<h1>Welcome to Sai Mobiles</h1>');
});

//port
const PORT=process.env.PORT || 8081;



//run listen
app.listen(PORT, () => {
    console.log(`Server Runnning on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
