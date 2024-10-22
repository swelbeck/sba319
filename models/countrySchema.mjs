// ./models/countrySchema.mjs
// Imports
import mongoose from "mongoose";

// create schema
const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  capitalCity: {
    type: String,
    required: true,
  },
  languages: {
    officialLanguage: {
      type: String,
      required: true,
    },
    otherLanguages: {
      type: [String],
    },
  },
  population: {
    type: Number,
    min: [1, "Population must be at least 1."],
  },
});

// Indexing
countrySchema.index({ name: 1 });
countrySchema.index({ continent: 1 });

// Export data model using Country as the reference name
// "Country" is thename of the collection in the Database
export default mongoose.model("Country", countrySchema);
