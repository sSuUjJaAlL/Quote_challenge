import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
   
    question : {
        type : String,
        requird : [true,'Question is Required']
    },

    answer : {
        type : String,
        requird : [true,'Answer is Required']
    },

    questionSolvedBy : {
        type : mongoose.Schema.Types.ObjectId,
    },


    programmingLanguage : {
        type : String,
        required : [true,'Programming Language is Required']
    },

    topic : {
        type : String,
        required : [true,'Topic is Required']
    }

})

const Question = mongoose.model('Question',questionSchema)
export default Question