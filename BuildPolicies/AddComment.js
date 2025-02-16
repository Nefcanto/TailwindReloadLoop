import {
    existsSync,
    mkdirSync,
    readFileSync,
    writeFileSync,
} from "fs"
import { glob } from "glob"
import path from "path"

const ensureAddCommentUsesEntityOnly = () => {
    let jsxFiles = glob.sync("./**/*.jsx")
    jsxFiles.map(file => {
        const content = readFileSync(file).toString()
        if (!content.includes("<AddComment")) {
            return
        }
        const addComment = content.match("<AddComment[^>]*>")[0]
        if (addComment.includes("entityType")) {
            throw new Error("Remove entityType, entityGuid, and module from your <AddComment /> and only pass entity to it.")
        }
    })
}

export default ensureAddCommentUsesEntityOnly
