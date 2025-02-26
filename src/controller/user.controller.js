import { signupService } from "../service/user.service";

 async function signUpController(req,res){
    try{
        const body = req.body;
        const scontroller= await signupService(body);
        return res.status(201).json({scontroller});
        
        

    }
    catch(err){
        console.log('Error');
    }
 }