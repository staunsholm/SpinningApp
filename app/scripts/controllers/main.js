'use strict';

angular.module('SpinningApp')
    .controller('MainCtrl', function ($scope, $location)
    {
        $scope.favoriteSessions = [
            {
                id: 1,
                title: 'Test Title',
                length: 100000
            },
            {
                id: 2,
                title: 'Spin \'till you die',
                length: 200000
            },
            {
                id: 3,
                title: 'Speed, climb and sprint',
                length: 300000
            }
        ];

        $scope.play = function(id)
        {
            $location.path('/play/' + id);
        }
    })

    .$inject = ['$location'];
