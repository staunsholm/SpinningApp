'use strict';

angular.module('SpinningApp')
    .controller('PlayCtrl', function ($scope, $location, $routeParams, Sessions, Spotify)
    {
        var id = $routeParams.id;

        $scope.session = Sessions.getSession(id);

        $scope.startSession = function ()
        {
            Spotify.playTrack(null);
        };
    })

    .$inject = ['$location', '$routeParams', 'Sessions', 'Spotify'];
