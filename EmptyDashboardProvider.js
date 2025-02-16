import {
    existsSync,
    mkdirSync,
    writeFileSync,
} from "fs"

const emptyDashboardProvider = barrels => {

    const dashboardPath = "./src/Components/Dashboard"
    if (!existsSync(dashboardPath)) {
        mkdirSync(dashboardPath)
        const emptyExport = `const Menu = []

        export { Menu }
        `
        writeFileSync(`${dashboardPath}/Exports.jsx`, emptyExport)
        barrels.push(`${dashboardPath}/Exports`)
    }
}

export default emptyDashboardProvider
