const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
  console.log("connected to database");
})
.catch((err)=>{
  console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/",(req, res)=>{
  res.send("is comming soon..........");
});

app.get("/testListing",async(req, res)=>{
  let sampleListing = new Listing({
    title: "my new Vill",
    description: "By the beach",
    price: 1500,
    location:"Goa",
    country:"India",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successful testing");
});

app.listen(8080, ()=>{
  console.log("Server is listening to post 8080");
})
