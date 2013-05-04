'use strict';

angular.module('SpinningApp')
    .controller('MainCtrl', function ($scope, $location, Sessions)
    {
        Utils.moveBackground(0);

        $scope.play = function(id)
        {
            $location.path('/play/' + id);
        }
    })

    .$inject = ['$location','Sessions'];

