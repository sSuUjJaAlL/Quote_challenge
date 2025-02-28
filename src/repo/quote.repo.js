import Quote from "../database/quotes/quote.schema.js"

async function insertQuote(quoteandmood){

    const insert= await Quote.insertMany(quoteandmood);
    return insert


}

export{
    insertQuote
}