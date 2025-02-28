import { insertQuote } from "../repo/quote.repo.js";

async function quoteService(body){
    const {contents}= body;
    const putQuote= await insertQuote(contents)
    return putQuote


}

export{
    quoteService
}