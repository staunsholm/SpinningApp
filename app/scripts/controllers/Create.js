'use strict';

angular.module('SpinningApp')
    .controller('CreateCtrl', function ($scope, Sessions, Spotify)
    {
        $scope.doSearch = function()
        {
            Spotify.search($scope.query, function(result)
            {
                $scope.searchResult = result;
                $scope.$digest();
            });
        };

        $scope.playTrack = function(track)
        {
            Spotify.playTrack(track, 40000);
        };

        $scope.stopTrack = function()
        {
            Spotify.stopTrack();
        };

        $scope.pauseTrack = function()
        {
            Spotify.pauseTrack();
        };
    })

    .$inject = ['Sessions', 'Spotify'];
