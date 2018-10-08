import * as browserSync from "browser-sync";
import { settings }from "sly-webserver";

const bsync = browserSync.create();

export function startBrowserSync(cb) {

    bsync.init({
        proxy: `http://${settings.Hostname}:${settings.Port}/`,
        port: settings.BrowserSyncPort
        
    });

    cb();
};

export function browserSyncReload(cb) {
    bsync.reload();
    cb();
}
