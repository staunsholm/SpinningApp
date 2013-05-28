'use strict';

angular.module('SpinningApp')
    .controller('PlayCtrl', function ($scope, $location, $routeParams, $timeout, Sessions, Spotify)
    {
        var id = $routeParams.id;

        $scope.session = Sessions.getSession(id);

        var items;
        $timeout(function() {
            items = document.querySelectorAll('.sessionItems li');
        }, 0);

        var itemNow = 0;


        $scope.startSession = function ()
        {
            //Spotify.playTrack(null);
            document.getElementsByClassName('startButton')[0].style.display = 'none';
        };

        $scope.rot = function() {
            if (!items) return;

            var itemCnt = items.length;

            itemNow++;
            if (itemNow+2 > itemCnt) itemNow = 0;

            items[itemNow-2 < 0 ? itemNow-2 + itemCnt : itemNow-2].className = "";
            items[itemNow-1 < 0 ? itemNow-2 + itemCnt : itemNow-1].className = "previous";
            items[itemNow-0 < 0 ? itemNow-2 + itemCnt : itemNow-0].className = "current";
            items[itemNow+1 > itemCnt ? itemNow+1 - itemCnt : itemNow+1].className = "next";
            items[itemNow+2 > itemCnt ? itemNow+2 - itemCnt : itemNow+2].className = "";
        };
    })

    .$inject = ['$location', '$routeParams', '$timeout', 'Sessions', 'Spotify'];
