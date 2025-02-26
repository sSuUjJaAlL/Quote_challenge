import mongoose, { mongo } from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type: string,
        required: [true,"Username required" ]
    },
    email:{
        type:string,
        required: [true,"Email required" ]
    },
    password:{
        type:string,
        required: [true,"Password required" ]
    }

})

const User= mongoose.model("User", userSchema)

export default User
