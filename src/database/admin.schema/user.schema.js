import mongoose, { mongo } from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required: [true,"Username required" ]
    },
    email:{
        type:String,
        required: [true,"Email required" ]
    },
    password:{
        type:String,
        required: [true,"Password required" ]
    },
    is_admin:{
        type:Boolean,
        default:true
    }

})

const User= mongoose.model("User", userSchema)

export default User
