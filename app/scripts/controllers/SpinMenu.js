'use strict';

angular.module('SpinningApp')
    .controller('SpinMenuCtrl', function ($scope, $location)
    {
        $scope.navigateTo = function(path)
        {
            console.log(path);
            $location.path(path);
        }
    })

    .$inject = ['$location'];

