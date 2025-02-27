import { insertQuote } from "../repo/quote.repo.js";

async function quoteService(body){
    const {mood,quote}= body;
    const is_admin=body.user.is_admin
    if(!is_admin){
        throw new Error;
    }
    const quoteAndmood= {
        mood:mood,
        quote:quote
        
    }
    const putQuote= await insertQuote(quoteAndmood)
    return putQuote


}

export{
    quoteService
}