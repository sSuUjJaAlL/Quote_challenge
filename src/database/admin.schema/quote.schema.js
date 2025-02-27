import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    mood:{
        type:String,
        required :true
    },

    quote:{
        type: String,
        requires: true 
    }

})

const Quote= mongoose.model("Quote", quoteSchema);

export default Quote

