import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  spending_time: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  best_time_to_visit: {
    type: String,
    required: true,
  },
  peace_status: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
});

const City = mongoose.model("City", citySchema);
export default City;
