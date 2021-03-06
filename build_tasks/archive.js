module.exports = function (grunt) {
  'use strict';

  var config = grunt.config;

  /** =========================================
   * Compress
   ===========================================*/

  config.set('compress.all', {
    options: {
      mode: 'tgz',
      archive: '<%= directories.project %>.tar.gz'
    },
    src: [
      'assets/**',
      'betterbuttons/**',
      '<%= directories.boilerplate %>/**',
      'cms/**',
      'framework/**',
      'googlesitemaps/**',
      'gridfieldextensions/**',
      '<%= directories.cmsBranding %>/**',
      'silverstripe-cacheinclude/**',
      'silverstripe-catalogmanager/**',
      'sortablegridfield/**',
      'vendor/**',
      '<%= directories.project %>/**',
      '.htaccess',
      '_ss_environment.php'
    ],
    dest: '/'
  });

  grunt.registerTask('archive', ['compress']);

};
