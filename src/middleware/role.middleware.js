


async function isAdmin(req,res,next) {
    const adminStatus = req.user.is_admin;
    const isAdmin = typeof adminStatus === 'boolean' && adminStatus
    if(isAdmin){
        next()
    }else{
        throw new Error(`Role is not Admin`)
    }
}

export {
    isAdmin
}