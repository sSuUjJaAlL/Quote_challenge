import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    code:{
        type: String,
        required:true
    },
    question:{
        type:String,
        required: true
    }
})

const Question= mongoose.model("Question",questionSchema)

export default Question