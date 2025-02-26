import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question:{
        type:string,
        required: true
    }
})

const Question= mongoose.model("Question",questionSchema)