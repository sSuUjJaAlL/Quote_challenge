import { quoteService } from "../service/quote.service.js";

async function quoteController(req,res){
    try{
        const body = req.body
        const {is_admin} = req.user;
        
    

        const qservice= await quoteService(body,is_admin)
        return res.json({
            message: "Quote posted successfully ",
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
