import { createNotifyService } from "../service/notify.service.js"



async function createNotify (req,res,next) {
    try{
        const {body} = req
        const userId = req.user.id
        const apiResponse = await createNotifyService(body,userId)
        return res.status(201).json({
            message : `User will be Notify Every ${new Date(body.stopDate).toISOString()}`,
            data : apiResponse
        })
    }catch(err){
        next(err)
    }
}

export {
    createNotify
}

[
    {
        question : 'Write a program to reverse a string, String : abc',
        answer : 'cba',
        programmingLanugae : 'Python',
        topic : 'DSA'
    }
]