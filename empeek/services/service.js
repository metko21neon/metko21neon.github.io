angular.module('myApp')
    .factory('Store', [function() {
        'use strict';

        var _currentId = null;
        var _currentTitle = '';
        var data = {};
        var _numberOfComments = 0;
        return {
            setCurrentData: function (id, title) {
                _currentId = id + 1;
                _currentTitle = title;
            },
            getCurrentData : function () {
                return data = {
                    id: _currentId,
                    title: _currentTitle
                };
            }
        };
    }]);