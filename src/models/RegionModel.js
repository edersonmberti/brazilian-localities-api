const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegionSchema = new Schema(
  {
    id: {
      type: number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Region", RegionSchema);
