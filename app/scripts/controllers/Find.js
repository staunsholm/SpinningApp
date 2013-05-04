'use strict';

angular.module('SpinningApp')
    .controller('FindCtrl', function ($scope, $location, Sessions)
    {
        Utils.moveBackground(1);

        $scope.play = function(id)
        {
            $location.path('/play/' + id);
        }
    })

    .$inject = ['$location','Sessions'];

