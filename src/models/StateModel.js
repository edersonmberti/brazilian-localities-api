const mongoose = require("mongoose");
const { Schema } = mongoose;

const StateSchema = new Schema(
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
    region: {
      type: Schema.Types.ObjectId,
      ref: "Region",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("State", StateSchema);
