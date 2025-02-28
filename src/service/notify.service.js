import { createNotify, createStreak } from "../repo/notify.repo.js"
import { getUserByid } from "../repo/user.repo.js"


async function createNotifyService(payload, userId){
    const {language, stopDate,questionCountPerDay, time, topic} = payload

    const userDoc = await getUserByid(userId)

    const dataPayload = JSON.parse(JSON.stringify(payload))

    const savedResult = await createNotify({...dataPayload,user : userDoc._id})

    const savedResultid = savedResult._id

    const payloadForStreak = {
        notify : savedResultid,
        preferedLanguage : language
    }

    const savedStreak = await createStreak(payloadForStreak)

    return {
        notify : savedResult,
        streak : savedStreak
    }

}

export {
    createNotifyService 
}