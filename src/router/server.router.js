import { Router } from "express";

const serverRouter= Router();

serverRouter.use('/server',quotesServer);

export{
    serverRouter
}