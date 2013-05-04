module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    coffee: {
      app: {
        src: ['assets/js/frontend/**/*.coffee'],
        dest: 'public/javascripts/frontend',
        options: {
          bare: true,
          preserve_dirs: true
        }
      }
    },
    copy: {
      templates: {
        src: ['assets/js/frontend/templates/**'],
        dest: 'public/javascripts/frontend/templates',
      },
      vendor: {
        src: ['assets/js/frontend/vendor/**'],
        dest: 'public/javascripts/frontend/vendor'
      }
    },
    watch: {
      files: ['<config:coffee.app.src>', '<config:copy.templates.src>'],
      tasks: ['coffee:app', 'copy:templates', 'copy:vendor']
    }
  });

  grunt.registerTask('default', ['coffee', 'copy']);
};
