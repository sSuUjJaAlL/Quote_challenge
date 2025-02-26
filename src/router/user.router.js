import { Router } from "express";

const userRouter= Router();


userRouter.post('/signup',signupController);

export default userRouter