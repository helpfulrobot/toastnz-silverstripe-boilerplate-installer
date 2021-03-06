module.exports = function (grunt) {
  'use strict';

  var config = grunt.config;

  /** =========================================
   * Deploy
   ===========================================*/

  /** -----------------------------------------
   * Move Shivs
   -------------------------------------------*/

  config.set('copy.all', {
    files: [
    /**
     * SVGs
     */
      {
        cwd: '<%= directories.boilerplate %>/images/svg',
        src: '*',
        dest: '<%= directories.project %>/images/svg/src',
        expand: true
      },
    /**
     * Javascript
     */
      {
        cwd: '<%= directories.bower %>/modernizr/',
        src: 'modernizr.js',
        dest: '<%= directories.project %>/javascript/lib',
        expand: true
      }
    ]
  });

  /** -----------------------------------------
   * Deploy
   *
   * Run all tasks
   -------------------------------------------*/

  grunt.registerTask('deploy', ['copy', 'javascript', 'images', 'css']);

};
