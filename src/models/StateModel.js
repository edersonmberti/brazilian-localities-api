const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const { Schema } = mongoose;

const StateSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    uf: {
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
  },
  { timestamps: true }
);

StateSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("State", StateSchema);
