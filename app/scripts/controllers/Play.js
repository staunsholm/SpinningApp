'use strict';

angular.module('SpinningApp')
    .controller('PlayCtrl', function ($scope, $location, $routeParams, Sessions)
    {
        var id = $routeParams.id;

        $scope.session = Sessions.getSession(id);
    })

    .$inject = ['$location', '$routeParams', 'Sessions'];
