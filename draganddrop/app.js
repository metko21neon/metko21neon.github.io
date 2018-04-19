'use strict';

angular.module('myApp', [
  'ngDragDrop',
  'ngRoute',
  'myApp.version'
])
.controller('myCtrl', function($scope, $timeout, $http) {
    $scope.list1 = [{'title': 'Coca-cola'},{'title': 'Sprite'},{'title': 'Hamburger'},{'title': 'Sandwich'}];
    $scope.list2 = [{'title': 'Hat'},{'title': 'Coat'},{'title': 'Sneakers'},{'title': 'Boots'}];
    $scope.list3 = [{'title': 'Duff'},{'title': 'Yankee'},{'title': 'Jameson'},{'title': 'RedBreast'}];

    $scope.list4 = [];
    $scope.onSubmit = function () {
        $http.post('https://my-json-server.typicode.com/metko21neon/angularjs-test/posts/', $scope.list4)
            .success(function (data) {
                alert('I am submitted!');
                $scope.dsblBtn = true;
                $scope.clBtn = 'btn-danger';
                $scope.list4 = [];
            })
            .error(function (data) {
                alert('I am not submitted!');
            });
    };

    $scope.dsblBtn = true;
    $scope.clBtn = 'btn-danger';
    $scope.onCheck = function () {
        if ($scope.list4.length === 0) {
            $scope.dsblBtn = true;
            $scope.clBtn = 'btn-danger';
        } else {
            $scope.dsblBtn = false;
            $scope.clBtn = 'btn-success';
        }
    };
});

