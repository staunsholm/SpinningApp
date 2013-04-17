'use strict';

angular.module('SpinningApp', [])
    .config(function ($routeProvider)
    {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/Create', {
              templateUrl: 'views/Create.html',
              controller: 'CreateCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
