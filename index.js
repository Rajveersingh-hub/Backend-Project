import dotenv from "dotenv";
import express from "express";
import connectDB from  "./src/db/index.js";
const app = express();

dotenv.config();
connectDB();    
