'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('FeedCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.posts = [
      "posts/2015-08-16-1032.md"
    ]
  });
