import { get } from "Base"

const getEnsuredLearnerExistence = async userGuid => {
    return await get(`/learner/ensureLearnerExistence?userGuid=${userGuid}`)
}

export default getEnsuredLearnerExistence
