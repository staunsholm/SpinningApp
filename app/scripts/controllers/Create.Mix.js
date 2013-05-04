'use strict';

angular.module('SpinningApp')
    .controller('CreateMixCtrl', function ($scope, $location, $routeParams, $timeout, Sessions, Spotify)
    {
        Utils.moveBackground(2);

        $scope.Spotify = Spotify;

        $scope.sessionId = $routeParams.id;

        (function getSession()
        {
            $scope.session = Sessions.getSession($scope.sessionId);
            if (!$scope.session)
            {
                $timeout(getSession, 100);
            }
        })();


    })

    .$inject = ['$location', '$routeParams', '$timeout', 'Sessions', 'Spotify'];
