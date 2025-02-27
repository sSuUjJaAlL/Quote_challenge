import User from "../database/admin.schema/user.schema.js";

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

export {
    compareEmail,
    userCreate,
    compareusername
}
