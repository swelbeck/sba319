// ./models/citySchema.mjs
import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    // type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
  population: { type: Number, min: [1, "Population must be at least 1"] },
  region: { type: String }, // Optional field for regional divisions
});

// Indexing
citySchema.index({ name: 1 });
citySchema.index({ country: 1 });

export default mongoose.model("City", citySchema);
