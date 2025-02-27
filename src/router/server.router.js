import { Router } from "express";
import { quotesRouter } from "./quotes.router.js";
import userRouter from "./user.router.js";
import { checkToken } from "../middleware/auth.middleware.js";

const serverRouter= Router();

serverRouter.use('/server',[userRouter,quotesRouter]);

export{
    serverRouter
}