const gulp = require('gulp'); // Подключение гульпа

const fontsSources = './src/assets/fonts/**/*';

/**
 * Это описание задачи, которая будет переносить наши фонты в папку dist
 * @returns {*}
 */
let publishFonts = (destinationDir) => {
    gulp.src(fontsSources).pipe(gulp.dest(destinationDir +'assets/fonts'))
};

module.exports = publishFonts;