import {Logging} from "matrix-appservice-bridge"

if (process.argv.includes("--logging")) {
    Logging.configure({console: "debug"});
}
