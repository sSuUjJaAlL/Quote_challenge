import mongoose from "mongoose";

async function connect(){
    const connectMongoose= mongoose.connect("mongodb+srv://sujal_17:q6mbENJMEIDCk9cG@cluster0.bcm7t.mongodb.net/")
    return connectMongoose
}

export {
    connect
}