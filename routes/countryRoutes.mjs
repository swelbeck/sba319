// countryRoutes.mjs
// Imports
import express from "express";
import countryCtrl from "../controllers/countryControllers.mjs";
const router = express.Router();

////// CREATE //////
// @route:  POST /countries
// @desc    Add a country to the database
// @access: Public
router.post("/countries", countryCtrl.addCountry);

////// READ //////
// @route:  GET /
// @desc    Display welcome message
// @access: Public
router.get("/", countryCtrl.welcomeMsg);

// @route:  GET /countries
// @desc    GET all countries
// @access: Public
router.get("/countries", countryCtrl.getCountries);

// @route:  GET /countries/:id
// @desc    GET a specific country by ID
// @access: Public
router.get("/countries/:id", countryCtrl.getCountryById);

////// UPDATE //////
// @route:  UPDATE /countries/:id
// @desc    UPDATE a country by ID
// @access: Public
router.patch("/countries/:id", countryCtrl.updateCountryById);

////// DELETE //////
// @route:  DELETE /countries/:id
// @desc    DELETE a country by ID
// @access: Public
router.delete("/countries/:id", countryCtrl.removeCountryById);

// Exports
export default router;
