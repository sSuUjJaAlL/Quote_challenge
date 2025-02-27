import Quote from "../database/admin.schema/quote.schema.js"
async function insertQuote(quoteandmood){

    const insert= await Quote.create({...quoteandmood});
    return insert


}

export{
    insertQuote
}