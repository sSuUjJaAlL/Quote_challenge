import mongoose from "mongoose";

async function connect(){
    const connectMongoose= mongoose.connect("mongodb+srv://sujaladhikari332:kRVmNjHLQs5h1G7S@cluster0.l8ccl.mongodb.net/") 
    return connectMongoose
}

export {
    connect
}