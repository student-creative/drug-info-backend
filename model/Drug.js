const mongoose = require("mongoose");

const DrugSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true
    },

    genericName: {
      type: String,
      required: true,
      trim: true
    },

    brandName: {
      type: String,
      required: true,
      trim: true
    },

    company: {
      type: String,
      required: true,
      index: true   // filter fast hoga
    },

    launchDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Drug", DrugSchema);
