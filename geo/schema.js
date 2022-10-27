import mongoose from "mongoose";
import geocoder from "./geoCode.js";

let point = new mongoose.Schema({
    pointName : {
        type : String,
        required : [true, "Point name needed"],
        unique : [true, "Point already exists"],
        trim : true
    },
    address : {
        type : String,
        required : [true, 'Address needed']
    },
    location: {
        type: {
          type: String,
          enum: ['Point']
        },
        coordinates: {
          type: [Number],
          index : '2dsphere'
        },
        formattedAddress : String
      }
});

// Creating location using address coming prom postman
point.pre('save', async function (next) {
    let location = await geocoder.geocode(this.address);

    this.location = {
        type : 'point',
        coordinates : [location[0].longitude, location[0].latitude],
        formattedAddress : location[0].formattedAddress
    };

    this.address = null;
    next();
});

export default mongoose.model("points", point, "points");