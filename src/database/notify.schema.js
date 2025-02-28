import mongoose from "mongoose";

const notifySchema = new mongoose.Schema({
   
    language : {
        type : String,
        requird : [true,'Question is Required']
    },

    stopDate : {
        type : Date,
        requird : [true,'Date is Required']
    },

    questionCountPerDay : {
        type : Number,
        requird : [true,'questionCountPerDay is Required']
    },


    time : {
        type : String,
        required : [true,'Time is Required']
    },

    topic : [{
        type : String,
        required : [true,'Topic is Required']
    }],

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }

   

})

const Notify = mongoose.model('Notify',notifySchema)
export default Notify