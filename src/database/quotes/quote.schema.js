import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
   
    quoteMessage : {
        type : String,
        requird : [true,'Quote Message is Required']
    },

    type : {
        type : String,
        required : [true,'Type is Required']
    }

})

const Quote = mongoose.model('Quote',quoteSchema)
export default Quote