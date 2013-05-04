'use strict';

angular.module('SpinningApp')
    .directive('spinMenu', function ()
    {
        return {
            templateUrl: 'views/spinMenu.html',
            restrict: 'E'
        };
    });
