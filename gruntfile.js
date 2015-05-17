/**
 * gruntfile.js
 * Created by dcorns on 5/14/15.
 */
'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      },
      production: {
        src: ['dist/']
      },
      style:{
        src: ['build/css/']
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: './',
        src: ['*.html', 'css/*.css', 'img/*.*', 'views/**/*.html'],
        dest: 'build/',
        filter: 'isFile'
      },
      production: {
        expand: true,
        cwd: './',
        src: ['*.html', 'css/*.css', 'img/*.*', 'views/**/*.html'],
        dest: 'dist/',
        filter: 'isFile'
      },
      style:{
        expand: true,
        cwd: '/',
        src: ['css/*.css'],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['js/**/*.js'],
        dest: 'build/bundle.js'
      },

      production: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['js/**/*.js'],
        dest: 'dist/bundle.js'
      }
    },

    simplemocha: {
      all: {
        src: ['test/mocha/api/**/*.js']
      }
    },

  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('build:production', ['clean:production', 'browserify:production', 'copy:production']);
  grunt.registerTask('test', ['simplemocha']);
};