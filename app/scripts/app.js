'use strict';

angular.module('SpinningApp', [])
    .config(function ($routeProvider)
    {
        $routeProvider
            .when('/', {
                templateUrl: 'views/Main.html',
                controller: 'MainCtrl'
            })
            .when('/create', {
              templateUrl: 'views/Create.html',
              controller: 'CreateCtrl'
            })
            .when('/find', {
              templateUrl: 'views/Find.html',
              controller: 'FindCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
