import { Router } from "express";
import { serverRouter } from "./server.router.js";
import { quoteController } from "../controller/quote.controller.js";
import { checkToken } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/role.middleware.js";

const quotesRouter= Router();

quotesRouter.post('/quotes',checkToken,isAdmin,quoteController )

export {
    quotesRouter
}

