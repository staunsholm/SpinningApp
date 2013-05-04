'use strict';

angular.module('SpinningApp')
    .controller('CreateCtrl', function ($scope, $location, $routeParams, Sessions, Spotify)
    {
        Utils.moveBackground(2);

        $scope.Spotify = Spotify;

        $scope.sessionId = $routeParams.id;

        if (!$scope.sessionId)
        {
            // create new session
            $scope.session = Sessions.createSession();
        }
        else
        {
            // get existing session
            (function getSession()
            {
                $scope.session = Sessions.getSession($scope.sessionId);
                if (!$scope.session)
                {
                    $timeout(getSession, 100);
                }
            })();
        }

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
                if(!$scope.$$phase)
                {
                    $scope.$apply();
                }
            });
        };

        $scope.addTrack = function(track)
        {
            // switch start and end time if end is before start
            if (track.startTime > track.endTime)
            {
                var tmpTime = track.endTime;
                track.endTime = track.startTime;
                track.startTime = tmpTime;
            }

            var part = Sessions.createPart($scope.session);
            part.spotifyId = track.uri;
            part.startTime = track.startTime;
            part.endTime = track.endTime;
            part.artist = track.artists[0].name;
            part.song = track.name;
            part.duration = track.duration;
            part.image = track.image;

            Sessions.saveSession($scope.session);
        };

        $scope.removeTrack = function(part)
        {
            Sessions.deletePart($scope.session, part.id);
        }
    })

    .$inject = ['$location', '$routeParams', 'Sessions', 'Spotify'];
