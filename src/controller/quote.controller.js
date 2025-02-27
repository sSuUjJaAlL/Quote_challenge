import { quoteService } from "../service/quote.service.js";

async function quoteController(req,res){
    try{
        const body =req.body
        const qservice= await quoteService(body)
        return res.json({
            message: "Quote posted ",
            quote: qservice
        });


    }
    catch(err){

    }

}

export{
    quoteController
}
