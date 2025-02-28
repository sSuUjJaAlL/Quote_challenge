import Question from "../database/questions/question.schema.js"



async function bulkInsert(content){
    const bulkContent = await Question.insertMany(content)
    return bulkContent
}

async function getAllQuestion(){
    return Question.find({})
}

async function getQuestionByNotifyLanguage(language,top) {
    const result = await Question.find(
        {
           programmingLanguage : language
        }
    )
    return result
}


export {
    bulkInsert,
    getAllQuestion,
    getQuestionByNotifyLanguage
}