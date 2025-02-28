import { quoteService } from "../service/quote.service.js";

async function quoteController(req,res,next){
    try{
        const  body= req.body
        const qservice= await quoteService(body)
        return res.json({
            message: "Quote posted successfully ",
            quote: qservice
        });


    }
    catch(err){
        next(err)
    }

}

export{
    quoteController
}
