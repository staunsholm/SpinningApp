'use strict';

angular.module('SpinningApp')
    .controller('FindCtrl', function ($scope, $location, Sessions)
    {
        $scope.sessions = Sessions.getSessions();

        $scope.play = function(id)
        {
            $location.path('/play/' + id);
        }
    })

    .$inject = ['$location','Sessions'];

