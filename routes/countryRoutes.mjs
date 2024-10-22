// countryRoutes.mjs
// Imports
import express from "express";
const router = express.Router()

// CREATE

// READ
router.get("/", (req,res)=>{
    res.send("Welcome to the server!")
})

// UPDATE

// DELETE

export default router;