import { task, src } from "gulp";
import { Server } from "sly-webserver";
import { startBrowserSync } from "./browserSync";

export function webserver(cb) {

    new Server().startServer();    
    cb();
};
