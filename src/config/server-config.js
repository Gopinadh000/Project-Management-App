import dotenv from "dotenv";
import express from "express";
import { consoleBox } from "../utils/common.js";

// Load Environment Variables
dotenv.config();

export const serverConfig = (app) => {
    // Add middleware here
    // app.use(express.json());
    // app.use(express.urlencoded({ extended: true }));

    // Basic server route
    app.get("/", (req, res) => {
        res.send("Hello from server!");

    });

    consoleBox('✅ Server configured successfully')
}


