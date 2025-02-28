import { getNotifyById } from "../repo/notify.repo.js"
import { bulkInsert, getAllQuestion, getQuestionByNotifyLanguage } from "../repo/question.repo.js"
import { getUserByid } from "../repo/user.repo.js"



async function bulkInsertQuestionService(content) {
    const bulkResult = await bulkInsert(content)
    const allQuestion = await getAllQuestion()
    return allQuestion
}

async function getQuestionBasedOnPreferencesService(userId) {
    const userDoc = await getUserByid(userId)

    const userDocId = userDoc._id

    const notifyDoc = await getNotifyById(userDocId)

    const language = notifyDoc.language
    const topic = notifyDoc.topic 
    const questions = await getQuestionByNotifyLanguage(language,topic)
    const filteredTopic = questions.filter((data) => topic.includes(data.topic)).slice(0,notifyDoc.questionCountPerDay)
    return filteredTopic
}

export {
    bulkInsertQuestionService,
    getQuestionBasedOnPreferencesService
}