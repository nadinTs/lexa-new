module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            style: {
                files: {
                    'css/style.css': 'less/style.less'
                }
            }
        },

        watch: {
            css: {
                files: 'less/**/*.less',
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });
};