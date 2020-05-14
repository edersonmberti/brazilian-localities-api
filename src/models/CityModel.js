const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const { Schema } = mongoose;

const CitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    state: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "State",
    },
  },
  { timestamps: true }
);

CitySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("City", CitySchema);
