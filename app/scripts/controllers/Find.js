'use strict';

angular.module('SpinningApp')
    .controller('FindCtrl', function ($scope, $location, Sessions)
    {
        $scope.play = function(id)
        {
            $location.path('/play/' + id);
        }
    })

    .$inject = ['$location','Sessions'];

