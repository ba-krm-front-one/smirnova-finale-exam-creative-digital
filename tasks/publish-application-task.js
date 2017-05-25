const publishRootFiles = require('./publish-root-files.js');
const publishFonts = require('./publish-fonts.js');
const publishImages = require('./publish-images.js');
const {publishCssAndAddBrowserPrefixes, stylesheetsSources} = require('./publish-css-and-add-browser-prefixes');
const publishJs = require('./publish-js.js');
const publishLib = require('./publish-lib.js');

/**
 * Это описание задачи, которая будет переносить наши ассеты из исходников в папку dist
 * @returns {*}
 */
let publishApplication = (destinationDir) => {
    publishRootFiles(destinationDir);
    publishFonts(destinationDir);
    publishImages(destinationDir);
    publishCssAndAddBrowserPrefixes(destinationDir);
    publishJs(destinationDir);
    publishLib(destinationDir);
};

let PublishApplicationTask = () => {
    return publishApplication('dist/')
};

module.exports = PublishApplicationTask;