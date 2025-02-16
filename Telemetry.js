import util from "util"
import {
    existsSync,
    lstatSync,
    readFileSync,
} from "fs"
import { exec } from "child_process"

const promisifiedExec = util.promisify(exec)

const executeOnShell = async command => {
    try {
        const { stdout, stderr } = await promisifiedExec(command)
        if (stderr) {
            console.log("stderr:", stderr, command)
            return null
        }
        return stdout
    } catch (err) {
        console.error(err, command)
        return ""
    }
}

const serverInfoPath = "/Machine.json"
const serverInfo = (existsSync(serverInfoPath) && lstatSync(serverInfoPath).isFile()) ? readFileSync(serverInfoPath, 'utf8') : {}
const partsCommand = "grep -nr Modules/ tsconfig.json | cut -d\"/\" -f3 | sort"
const parts = (await executeOnShell(partsCommand))
    .split("\n")
    .filter(i => i)
    .map(file => file.trim())
const {
    App,
    Instance,
    Organization,
    Repository,
} = process.env

const telemetryData = {
    App,
    Instance,
    Organization,
    Parts: parts,
    Repository,
    Server: serverInfo,
}

const sendTelemetry = () => {
    console.log(telemetryData)
    fetch("https://api.postgres.holism.ir/telemetry/save?domain=holism.ir", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(telemetryData)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

const oneDayInMilliseconds = 30000 //24 * 60 * 60 * 1000;
setInterval(sendTelemetry, oneDayInMilliseconds)
