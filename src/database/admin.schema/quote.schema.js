import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    mood:{
        type:string,
        required :true
    },

    quote:{
        type: string,
        requires: true 
    }

})

const Quote= mongoose.model("Quote", quoteSchema);
