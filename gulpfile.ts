import { series, parallel, task } from "gulp";
import { Server, settings} from "sly-webserver"
import { webserver, startBrowserSync, watchSourceIndexFile } from "./tools/gulp/tasks/index";
 
var port = settings.Port;
var host = settings.Hostname;
var bsyncPort = settings.BrowserSyncPort;


exports.default = series(webserver, startBrowserSync, watchSourceIndexFile);