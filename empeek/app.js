'use strict';

angular.module('myApp', [
    'myApp.comments',
    'ngRoute'
]).
config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);