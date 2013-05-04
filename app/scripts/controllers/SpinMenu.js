'use strict';

angular.module('SpinningApp')
    .controller('SpinMenuCtrl', function ($scope, $location)
    {
        $scope.navigateTo = function (path)
        {
            $location.path(path);
        };

        $scope.isCurrent = function(path) {
            return path == $location.$$path ? 'current' : '';
        }
    })

    .$inject = ['$location'];
