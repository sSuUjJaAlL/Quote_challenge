import jwt from "jsonwebtoken";


async function checkToken(req,res,next){

    const token= req.headers.authorization

    if(!token){
        console.log(' You are not authorized');
    }
    const secret_key='subodh'
    const decrypt= jwt.verify(token,secret_key);
    req.user=decrypt;
    next();


}

export{
    checkToken
}