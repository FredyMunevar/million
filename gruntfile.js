module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          options: {
            sourcemap: false,
            compress: false,
            yuicompress: false,
            style: 'expanded',
          },
          files: {
            'css/styles.css' : 'sass/styles.scss'
          }
        },
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass', 'autoprefixer']
        }
      },
      autoprefixer: {
        options: {
          browsers: ['last 2 version', 'ie 8', 'ie 9']
        },
        single_file: {
               src: 'css/styles.css',
               dest: 'css/styles.css'
        },
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default',['watch', 'autoprefixer']);
  }