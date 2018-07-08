(function () {
    'use strict';
    angular
        .module('myApp')
        .component('itemsComponent', {
            templateUrl: 'items/items.component.html',
            controller: itemsController,
            controllerAs: 'vm'
        });

    itemsController.$inject = ['Store', '$location'];
    function itemsController(Store, $location) {
        var vm = this;
        vm.comments = (localStorage.getItem('comments')!==null) ? JSON.parse(localStorage.getItem('comments')) : [];
        vm.todos = (localStorage.getItem('todos')!==null) ? JSON.parse(localStorage.getItem('todos')) : [];
        localStorage.setItem('todos', JSON.stringify(vm.todos));

        vm.addTodo = function() {
            vm.todos.push({
                title: vm.todoText
            });
            vm.todoText = '';
            localStorage.setItem('todos', JSON.stringify(vm.todos));
        };
        vm.onSelect = function(index, title) {
            Store.setCurrentData(index, title);
            vm.selectedTodo = title;
        };
        vm.removeTodo = function(index, title) {
            vm.comments = (localStorage.getItem('comments')!==null) ? JSON.parse(localStorage.getItem('comments')) : [];
            localStorage.setItem('comments', JSON.stringify(vm.comments));
            vm.removeCurrent = title;
            vm.comments = vm.comments.filter(function (item) {
                return item.title !== vm.removeCurrent;
            });
            vm.todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(vm.todos));
            localStorage.setItem('comments', JSON.stringify(vm.comments));
            $location.path("/");
        };
    }
})();