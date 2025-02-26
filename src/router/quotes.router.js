import { Router } from "express";
import { serverRouter } from "./server.router";

const quotesRouter= Router();

quotesRouter.get('/postmood',quoteController )

export {
    quotesRouter
}

