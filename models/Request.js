import mongoose from "mongoose";

const Requests = new mongoose.Schema({
  deviceName: {
    type: String,
    required: true,
  },
  requestType: {
    type: String,
    required: true,
    enum: ["Buy", "Sell"],
  },
  condition: {
    type: String,
    required: true,
    enum: ["New", "A1", "A2", "B1", "B2", "C", "C/B", "C/D"],
  },
  storageCapacity: {
    type: String,
    required: true,
    enum: ["16GB", "32GB", "64GB", "128GB", "256GB", "512GB"],
  },
  price: {
    type: Number,
    required: true,
  },
});

const requestModel = mongoose.model("Requests", Requests);

module.exports = requestModel;
