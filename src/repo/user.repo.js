import User from "../database/user.schema.js";

async function compareEmail(email){
    const cmpemail= await User.findOne({email:email})
    return cmpemail

}

async function userCreate(body){
    const bdy= await User.create({...body});
    return bdy
}

async function compareusername(username){
    const cmpusername= await User.findOne({username:username })
    return cmpusername
}

async function getUserByid(userId){
    return await User.findOne({_id : userId})
}

export {
    compareEmail,
    userCreate,
    compareusername,
    getUserByid
}
