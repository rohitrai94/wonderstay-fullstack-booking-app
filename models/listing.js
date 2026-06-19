const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    type: String,
    default:"https://pixabay.com/illustrations/house-home-nature-building-4737447/",
    set: (v) => v ===""? "https://pixabay.com/illustrations/house-home-nature-building-4737447/": v, 
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;