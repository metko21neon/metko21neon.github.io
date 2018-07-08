(function () {
    'use strict';
    angular.module('myApp.comments', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/todo/:todoId', {
                templateUrl: 'comments/comments.component.html',
                controllerAs: 'vm',
                controller: commentsController
            });
    }]);

    angular.module('myApp')
        .component('commentsComponent', {
            templateUrl: 'comments/comments.component.html',
            controllerAs: 'vm',
            controller: commentsController
        });

    commentsController.$inject = ['Store'];
    function commentsController(Store) {
        var vm = this;
        vm.data = Store.getCurrentData();
        vm.currentId = vm.data.id;
        vm.currentTitle = vm.data.title;
        vm.comments = (localStorage.getItem('comments')!==null) ? JSON.parse(localStorage.getItem('comments')) : [];
        localStorage.setItem('comments', JSON.stringify(vm.comments));

        function getCurrentComments() {
            vm.result = vm.comments.filter(function (item) {
                return item.title === vm.currentTitle;
            });
        };

        vm.addComment = function() {
            vm.comments.push({
                id: vm.currentId,
                title: vm.currentTitle,
                comment: vm.todoComment
            });
            vm.todoComment = '';
            localStorage.setItem('comments', JSON.stringify(vm.comments));
            getCurrentComments();
        };
        getCurrentComments();
    }
})();