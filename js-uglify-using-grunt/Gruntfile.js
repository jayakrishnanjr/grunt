/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */
 
'use strict';
 
 
module.exports = function(grunt) {
 
    grunt.initConfig({
        uglify: {
            js: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js'
                }
            }
        });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', ['uglify']);
};