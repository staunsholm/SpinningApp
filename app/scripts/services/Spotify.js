'use strict';

angular.module('SpinningApp')
    .factory('Spotify', function ($timeout)
    {
        var currentTrack;
        var searchResult;
        var playingStartTime;

        // register when track should stop
        $timeout(handleStopTime, 200);
        function handleStopTime()
        {
            if (currentTrack && Date.now() - playingStartTime >= currentTrack.endTime - currentTrack.startTime)
            {
                models.player.stop();
                currentTrack = null;
            }

            $timeout(handleStopTime, 200);
        }

        var models, Location, Search, TopList, buttons, List, Image;
        if (!typeof(require) !== "object") return;
        require([
            '$api/models',
            '$api/location#Location',
            '$api/search#Search',
            '$api/toplists#Toplist',
            '$views/buttons',
            '$views/list#List',
            '$views/image#Image'
        ], function (_models, _Location, _Search, _TopList, _buttons, _List, _Image)
        {
            models = _models;
            Location = _Location;
            Search = _Search;
            TopList = _TopList;
            buttons = _buttons;
            List = _List;
            Image = _Image;
        });

        return {
            // search for query, calls update() when some or all data is received
            search: function (query, update)
            {
                if (!Search)
                {
                    console.log("Search not ready");
                    return;
                }

                searchResult = {
                    tracks: []
                };

                var search = Search.search(query);

                search.tracks.snapshot().done(function (a)
                {
                    a.loadAll('name').each(function (track)
                    {
                        searchResult.tracks.push(track);
                    });
                    update(searchResult);
                });
            },

            playTrack: function (track, startTime, endTime)
            {
                if (typeof(track) === "string")
                {
                    var track = models.Track.fromURI(track);
                    track.startTime = startTime;
                    track.endTime = endTime;
                }

                currentTrack = track;
                models.player.playTrack(track);
                models.player.seek(track.startTime);
                playingStartTime = Date.now();
            },

            pauseTrack: function ()
            {
                models.player.pause();
            },

            stopTrack: function ()
            {
                models.player.stop();
            }
        };
    });
