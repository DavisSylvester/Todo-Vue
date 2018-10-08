import { src, dest } from "gulp";
import { SourceConfiguration } from "../configuration/source";
import { ApplicationRootDirectory } from "../configuration/globals";




export async function copyIndexHtml() {

    const source = src(SourceConfiguration.SourceIndexFile, {
        base: 'src'
    })
        .pipe(dest(ApplicationRootDirectory));
    
        return source;
};
