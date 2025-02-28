import Notify from "../database/notify.schema.js";
import Streak from "../database/streak.schema.js";



async function createNotify (payload) {
    const savedResult = await Notify.create({
        ...payload
    })
    return savedResult
}

async function createStreak (payload) {
    const  savedResult = await Streak.create({
        notify : payload['notify'],
        preferedLanguage : payload['preferedLanguage']
    })
    return savedResult
}

async function getNotifyById(userId) {
    const result = await Notify.findOne({
        user : userId
    })
    return result
}


export {
    createNotify,
    createStreak,
    getNotifyById
}