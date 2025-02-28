import { Router } from "express";
import { checkToken } from "../middleware/auth.middleware.js";
import { createNotify } from "../controller/notify.controller.js";
import { isAdmin } from "../middleware/role.middleware.js";

const notifyRouter = Router()

notifyRouter.post('/notify',checkToken,createNotify)

export default notifyRouter