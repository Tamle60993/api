const mongoose = require("mongoose");

const OderSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    adress: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);
mongoose.models = mongoose.model("Oder", OderSchema);
