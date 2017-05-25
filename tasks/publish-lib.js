const gulp = require('gulp'); // Подключение гульпа

const libSources = './src/assets/lib/**/*';

/**
 * Это описание задачи, которая будет переносить наши скрипты в папку dist
 * @returns {*}
 */
let publishLib = (destinationDir) => {
    gulp.src(libSources).pipe(gulp.dest(destinationDir +'assets/lib'))
};

module.exports = publishLib;
