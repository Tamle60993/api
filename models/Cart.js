const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);
mongoose.models = mongoose.model("Cart", CartSchema);
