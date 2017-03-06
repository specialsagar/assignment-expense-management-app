
// Declare app level module which depends on views, and components
var app = angular.module('expenseMgntApp', ['ngRoute','userListController','userInfoController']);

//define routes
app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'templates/userLists.html',
      controller: 'userListCtrl'
    }).
    when('userDetail', {
      templateUrl: 'templates/userdetail.html',
      controller: 'userInfoCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});
