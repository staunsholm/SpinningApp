'use strict';

angular.module('SpinningApp')
    .controller('CreateCtrl', function ($scope, Sessions, Spotify)
    {
        $scope.query = 'James Blake';
        $scope.tracks = [];

        $scope.doSearch = function()
        {
            $scope.tracks = [];
            Spotify.search($scope.query, function(result)
            {
                if (result.tracks.length === 0) return;

                for (var i = 0, l = result.tracks.length; i < l; i++)
                {
                    result.tracks[i].startTime = 0;
                    result.tracks[i].endTime = result.tracks[i].duration;
                }

                $scope.tracks = result.tracks;
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
