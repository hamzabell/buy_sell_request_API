import mongoose from "mongoose";

const Requests = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  deviceName: {
    type: String,
    required: true,
  },
  requestType: {
    type: String,
    required: true,
    enum: ["BUY", "SELL"],
  },
  condition: {
    type: String,
    required: true,
    enum: ["New", "A1", "A2", "B1", "B2", "C", "C/B", "C/D"],
  },
  storageCapacity: {
    type: String,
    required: true,
    enum: ["64GB", "256GB", "512GB"],
  },
  price: {
    type: Number,
    required: true,
  },
  currencySign: {
    type: String,
    required: true,
    enum: ["dollar", "naira"],
  },
});

const requestModel = mongoose.model("Requests", Requests);

module.exports = requestModel;
