import { Router } from "express";
import { quotesRouter } from "./quotes.router";

const serverRouter= Router();

serverRouter.use('/server',quotesRouter);

export{
    serverRouter
}