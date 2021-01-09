import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

// Allow to use .env files
dotenv.config();

// Initialize Express Server
const app = express();

// Show All APIs have been called from frontend
if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
}

// Allow front end to send Data to Backend
app.use(express.json());

// Allowing Frontend to call backend without Cross Origin Errors
app.use(cors());

// ALL ROUTES

// PORT
const PORT = process.env.PORT || 5000;

// SETUP SERVER
app.listen(
    PORT,
    console.log(
        `Server Running in ${process.env.NODE_ENV} mode On Port ${PORT}`
    )
);
