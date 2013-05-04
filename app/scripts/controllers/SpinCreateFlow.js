'use strict';

angular.module('SpinningApp')
    .controller('SpinCreateFlowCtrl', function ($scope, $location, $routeParams)
    {
        $scope.sessionId = $routeParams.id;
    })

    .$inject = ['$location', '$routeParams'];

