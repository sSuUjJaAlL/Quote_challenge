// import { insertQuote } from "../repo/quote.repo.js";

// async function quoteService(body,is_admin){
//     const {mood,quote}= body;
    
//     if(!is_admin){
//         throw new Error("no admin");
//     }
//     const quoteAndmood= {
//         mood:mood,
//         quote:quote
        
//     }
//     const putQuote= await insertQuote(quoteAndmood)
//     return putQuote


// }

// export{
//     quoteService
// }