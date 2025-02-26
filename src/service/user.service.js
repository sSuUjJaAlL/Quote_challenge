import { compareEmail, userCreate} from "../repo/user.repo";

async function signupService(body){
    const {email,password}= body;
    const sgnupService= await compareEmail(email);
    if (sgnupService){
        throw new Error("Email already exists")
    }
    


}

export{
    signupService
}