'use strict';

angular.module('SpinningApp')
    .controller('FindCtrl', function ($scope, $location, $timeout, Sessions)
    {
        Utils.moveBackground(1);

        $scope.play = function(id)
        {
            $location.path('/play/' + id);
        }

        $timeout(function() {
            document.querySelector('body').onkeydown = function ()
            {
                document.querySelector('input').focus();
            };
        }, 0);
    })

    .$inject = ['$location', '$timeout', 'Sessions'];

