import express from "express";

const router = express.Router();

router.get("ai/gene" , ()=>{
    console.log("AI Route working");
    });

export default router;