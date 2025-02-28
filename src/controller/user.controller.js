import { signupService,loginService } from "../service/user.service.js";

 async function signUpController(req,res){
    try{
        const body = req.body;
        const scontroller= await signupService(body);
        return res.status(201).json({
            message :`Id created with ${scontroller.username} username`});
    }
    catch(err){
        console.log('Error');
    }
 }

 async function loginController(req,res){

    try{
        const body =req.body;
        const {username, password}= body
        const lcontroller= await loginService(username,password);
        return res.status(201).json({
            message :'Login successfull',
            token: lcontroller
        }, )

    }
    catch(err){
        console.log(err)
    }

 }

 export{
    signUpController,
    loginController
 }