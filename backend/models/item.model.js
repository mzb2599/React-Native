const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const Item = new Schema({
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  purchasedOn: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  condition: {
    type: String,
    required: true,
    enum: ["average", "good", "excellent"],
  },
  numberOfUsers: {
    type: Number,
    required: true,
  },
});

module.exports = model("Item", Item);
