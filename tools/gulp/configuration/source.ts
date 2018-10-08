import { sep, SourceRootDirectory, ApplicationRootDirectory,
    BuildRootDirectory, BundleRootDirectory } from "./globals";

    const HtmlExtension = "html";
    const IndexFileName = "index.html";

export class SourceConfiguration {

    

    static SourceRootDirectory = `${SourceRootDirectory}`;
    static ApplicationRootDirectory = `${ApplicationRootDirectory}`;
    static DistRootDirectory = `${BuildRootDirectory}${sep}`;
    static BundleRootDirectory = `${BundleRootDirectory}`;
    static BuildRootJavascriptFiles = `${SourceConfiguration.DistRootDirectory}/*.js`;
    static SourceIndexFile = `${SourceRootDirectory}${IndexFileName}`;
}