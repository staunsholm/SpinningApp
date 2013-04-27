'use strict';

angular.module('SpinningApp')
    .controller('MainCtrl', function ($scope, $location, Sessions)
    {
        Sessions.loadSessions();
        $scope.sessions = Sessions.getSessions();

        $scope.play = function(id)
        {
            $location.path('/play/' + id);
        }
    })

    .$inject = ['$location','Sessions'];

