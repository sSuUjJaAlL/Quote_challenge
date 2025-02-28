import { bulkInsertQuestionService, getQuestionBasedOnPreferencesService } from "../service/question.service.js"


async function bulkInsertQuestion(req,res,next){
    try{
        const {content} = req.body
        const apiResponse = await bulkInsertQuestionService(content)
        return res.status(201).json({
            message  : `${apiResponse.length} Question have been Inserted`
        })

    }catch(err){
        next(err)
    }
}


async function getQuestionBasedOnPreferences(req,res,next){
    try{
        const userId = req.user.id
        const apiResponse = await getQuestionBasedOnPreferencesService(userId)
        return res.status(201).json({
            message : `Your Question For the Day`,
            question : apiResponse
        })
    }catch(err){
        next(err)
    }
}

export {
    bulkInsertQuestion,
    getQuestionBasedOnPreferences
}