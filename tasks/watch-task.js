const gulp = require('gulp'); // Подключение гульпа
const {publishCssAndAddBrowserPrefixes, stylesheetsSources} = require('./publish-css-and-add-browser-prefixes');// Подключение SCSS плагина для компилирования файлов
const livereload = require('gulp-livereload');

let WatchTask = () => {
    let destinationDir = 'src/';
    publishCssAndAddBrowserPrefixes(destinationDir);
    livereload.listen();
    return gulp.watch([stylesheetsSources], () => publishCssAndAddBrowserPrefixes(destinationDir))
};

module.exports = WatchTask;
