const mongoose = require("mongoose")
image_schema = new mongoose.Schema({
    title: {
        type: String,
        require: true,

    }
    , image: {
        type: String,
        require: true,
      
    }
   

}, { timestamps: true })
const Image = mongoose.model("Image", image_schema);
module.exports = Image;


