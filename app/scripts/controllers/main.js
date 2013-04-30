'use strict';

angular.module('SpinningApp')
    .controller('MainCtrl', function ($scope, $location, Sessions)
    {
        $scope.play = function(id)
        {
            $location.path('/play/' + id);
        }
    })

    .$inject = ['$location','Sessions'];

