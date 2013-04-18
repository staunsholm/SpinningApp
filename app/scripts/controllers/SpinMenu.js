'use strict';

angular.module('SpinningApp')
    .controller('SpinMenuCtrl', function ($scope, $location)
    {
        $scope.navigateTo = function(path)
        {
            $location.path(path);
        }
    })

    .$inject = ['$location'];
