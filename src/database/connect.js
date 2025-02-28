import mongoose from "mongoose";

async function connect(){
    let retryCount = 0
    let retryStatus = true

    while(retryCount < 4 && retryStatus) {
        const connect = async () => { 
            const localMongoUrl = 'mongodb://localhost:27017/quotes'
            const atlsUrl = 'mongodb+srv://sujal_17:q6mbENJMEIDCk9cG@cluster0.bcm7t.mongodb.net/'
            const connectMongoose= await mongoose.connect(localMongoUrl)
            return connectMongoose
        }
        try{
            return await connect()
        }catch(err){

            if(retryCount.toString().startsWith('4')) {
                console.log(`Maximum Retry Count Exceeded`)
                process.exit(0)
            }

            console.log(`Error Encountered while connecting to the database, retryCount : ${retryCount}`)
            await connect()
        }

    }
}

export {
    connect
}