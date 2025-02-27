import { Router } from "express";
import { signUpController,loginController } from "../controller/user.controller.js";

const userRouter= Router();


userRouter.post('/signup',signUpController);
userRouter.post('/login', loginController);



export default userRouter