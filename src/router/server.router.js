import { Router } from "express";

import userRouter from "./user.router.js";
import { checkToken } from "../middleware/auth.middleware.js";
import { globalErrorHandler } from "../middleware/error.middleware.js";
import notifyRouter from "./notify.router.js";
import questionRouter from "./question.router.js";
import { quotesRouter } from "./quotes.router.js";

const serverRouter= Router();

serverRouter.use('/api',[userRouter,notifyRouter,questionRouter,quotesRouter]);

serverRouter.use('*',(req,res) => {
    return res.status(404).json(
        {
            message : `${req.originalUrl} Does not Exists System`
        }
    )
})

serverRouter.use(globalErrorHandler)

export{
    serverRouter
}