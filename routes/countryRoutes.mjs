// countryRoutes.mjs
// Imports
import express from "express";
const router = express.Router()

// CREATE

// READ
router.get("/", (req,res)=>{
    res.json("Welcome to the server!")
})

// UPDATE

// DELETE

export default router;