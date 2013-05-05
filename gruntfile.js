module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: [
          {expand: true, cwd: 'assets/js/frontend/', src: '**/*.coffee', dest: 'public/javascripts/frontend/', ext: '.js'}
        ],
        options: {
          bare: true
        }
      }
    },
    copy: {
      templates: {
        files: [
          {expand: true, cwd: 'assets/js/frontend/templates/', src: '**/*.hbs', dest: 'public/javascripts/frontend/templates'}
        ]
      },
      vendor: {
        src: 'assets/js/frontend/vendor/*.js',
        dest: 'public/javascripts/frontend/vendor/'
      }
    },
    watch: {
      coffee: {
        files: 'assets/js/frontend/**/*.coffee',
        tasks: ['coffee'],
        options: {
          nospawn: true
        }
      },
      templates: {
        files: 'assets/js/frontend/templates/**/*.hbs',
        tasks: ['copy:templates'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['coffee', 'copy']);
};
