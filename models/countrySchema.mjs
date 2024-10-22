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
  independent: {
    type: Boolean,
    required: true,
  },
  independenceDate: {
    type: Date,
    validate: {
      validator: function (v) {
        return this.independent ? v != null : true; // If independent, date is required
      },
      message: (props) =>
        `Independence date is required for independent countries.`,
    },
  },
  population: {
    type: Number,
    min: [1, "Population must be at least 1."],
  },
  countryCodes: {
    alpha2Code: {
      type: String,
      required: true,
    },
    alpha3Code: {
      type: String,
      required: true,
    },
    numericCode: {
      type: Number,
      required: true,
    },
  },
  administeringState: {
    type: String,
    validate: {
      validator: function (v) {
        return !this.independent ? v != null : true; // Required if not independent
      },
    },
  },
  domesticLegalStatus: {
    type: String,
    validate: {
      validator: function (v) {
        return !this.independent ? v != null : true; // Required if not independent
      },
    },
  },
});

// Indexing
countrySchema.index({ name: 1 });
countrySchema.index({ continent: 1 });

// Export data model using Country as the reference name
// "Country" is thename of the collection in the Database
export default mongoose.model("Country", countrySchema);
