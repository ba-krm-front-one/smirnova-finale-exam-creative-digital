const gulp = require('gulp'); // Подключение гульпа

const jsSources = './src/assets/js/**/*';

/**
 * Это описание задачи, которая будет переносить наши скрипты dist
 * @returns {*}
 */
let publishJs = (destinationDir) => {
    gulp.src(jsSources).pipe(gulp.dest(destinationDir +'assets/js'))
};

module.exports = publishJs;
