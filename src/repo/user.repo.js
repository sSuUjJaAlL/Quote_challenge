import User from "../database/admin.schema/user.schema";

async function compareEmail(email){
    const cmpemail= await User.findOne({email:email})
    return cmpemail

}

async function userCreate(body){
    const bdy= await User.create({...body});
    return bdy
}

export {
    compareEmail,
    userCreate
}
