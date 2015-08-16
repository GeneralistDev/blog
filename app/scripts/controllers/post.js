'use strict';

angular.module('blogApp')
  .controller('PostCtrl', function($scope, $showdown, $http, $q){
    $scope.md = "";

    var postContentURL = "posts/2015-08-16-1032.md";

    $http.get(postContentURL)
      .then(function(response){
        $scope.md = $showdown.makeHtml(response.data);
      }, function(response){
        console.log(response.data);
      });
  });
