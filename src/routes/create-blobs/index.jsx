import {
    writeFile,
    writeFileSync,
} from "fs"
import { get } from "Base"

export const onPost = async (requestEvent) => {
    const data = await get("/blob/data")
    const {
        colors,
        favicon,
        robotsTxt,
        sitemap,
    } = data

    if (favicon) {
        createFavicon(favicon)
    }
    if (sitemap) {
        createSiteMap(sitemap)
    }
    if (robotsTxt) {
        createRobotsTxt(robotsTxt)
    }
    if (colors) {
        createColors(colors)
    }

    requestEvent.json(
        200,
        {
            status: "Successful",
            message: "Blobs created!"
        }
    )
}

const createFavicon = (value) => {
    writeFile("dist/favicon.ico", value, "base64", function (err) {
        console.log(err)
    })
}

const createSiteMap = (value) => {
    writeFileSync("dist/sitemap.xml", value)
}

const createRobotsTxt = (value) => {
    writeFileSync("dist/robots.txt", value)
}

const createColors = (value) => {
    writeFileSync("dist/colors.css", value)
}
