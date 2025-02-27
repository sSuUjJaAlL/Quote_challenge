import { quoteService } from "../service/quote.service.js";

async function quoteController(req,res){
    try{
        const body = req.body
        const is_admin = req.user.is_admin;
        const qservice= await quoteService(body,is_admin)
        return res.json({
            message: "Quote posted ",
            quote: qservice
        });


    }
    catch(err){
        console.log(err)
    }

}

export{
    quoteController
}
