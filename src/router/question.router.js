import { Router } from "express";
import { checkToken } from "../middleware/auth.middleware.js";
import { bulkInsertQuestion, getQuestionBasedOnPreferences } from "../controller/question.controller.js";
import { isAdmin } from "../middleware/role.middleware.js";

const questionRouter = Router()

questionRouter.post('/admin/question',checkToken,bulkInsertQuestion)
questionRouter.get('/question',checkToken,getQuestionBasedOnPreferences)


export default questionRouter