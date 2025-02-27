import { compareEmail, compareusername, userCreate} from "../repo/user.repo.js"; 
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


async function signupService(body){
    const {email,password,username}= body;
    const sgnupService= await compareEmail(email);
    if (sgnupService){
        throw new Error("Email already exists")
    }
    const gensalt= await bcrypt.genSalt(10);
    const newPassword= await bcrypt.hash(password,gensalt);

    const payload= {
        username,
        password: newPassword,
        email

    }
    const saveData= await userCreate(payload);
    return saveData;

    

}
async function loginService(username,password){
    const checkUsername= await compareusername(username); 
    if(!checkUsername){
        throw new Error("Username doesnt exist");

    }
    const getPassword = checkUsername.password
    const check= await bcrypt.compare(password,getPassword)

    if(!check){
        throw new Error('Fuck subodh');
    }
    const payload={
        id: checkUsername._id,
        username: checkUsername.username,
        email:checkUsername.email,
        is_admin: checkUsername.is_admin

    }

    const secret_key= "subodh";
    const access_token= jwt.sign(payload,secret_key,{issuer:'Subodh Nepal ', expiresIn:'1h'});
    return access_token;




}


export{
    signupService,
    loginService
}