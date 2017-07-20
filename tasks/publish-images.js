const gulp = require('gulp'); // Подключение гульпа

const imagesSources = './src/assets/img/**/*';

/**
 * Это описание задачи, которая будет переносить наши картинкив папку dist
 * @returns {*}
 */
let publishImages = (destinationDir) => {
    gulp.src(imagesSources).pipe(gulp.dest(destinationDir +'assets/img'))
};

module.exports = publishImages;