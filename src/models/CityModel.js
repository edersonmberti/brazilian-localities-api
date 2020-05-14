const mongoose = require("mongoose");
const { Schema } = mongoose;

const PointSchema = require("../utils/PointSchema");

const CitySchema = new Schema(
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
    coords: {
      type: PointSchema,
      index: "2dsphere",
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: "State",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("City", CitySchema);
