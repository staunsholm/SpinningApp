'use strict';

angular.module('SpinningApp')
    .directive('spinCreateFlow', function ()
    {
        return {
            templateUrl: 'views/spinCreateFlow.html',
            restrict: 'E',
            controller: 'SpinCreateFlowCtrl'
        };
    });

