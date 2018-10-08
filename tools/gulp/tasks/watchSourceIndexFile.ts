import { series, watch } from "gulp";
import { SourceConfiguration } from "../configuration/source";
import { copyIndexHtml } from "./copyIndexHtml";
import { browserSyncReload } from "./browserSync";

export function watchSourceIndexFile() {

    const result = watch(
        [
            SourceConfiguration.SourceIndexFile
        ], 
        series(copyIndexHtml, browserSyncReload));
        
    return result;
};