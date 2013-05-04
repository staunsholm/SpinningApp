'use strict';

// TODO: fast click after every page change (dom update)
window.addEventListener('load', function ()
{
    new FastClick(document.body);
}, false);

angular.module('SpinningApp', ['firebase'])
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
            .when('/create/:id', {
                templateUrl: 'views/Create.html',
                controller: 'CreateCtrl'
            })
            .when('/create/:id/mix', {
                templateUrl: 'views/Create.Mix.html',
                controller: 'CreateMixCtrl'
            })

            .when('/find', {
                templateUrl: 'views/Find.html',
                controller: 'FindCtrl'
            })
            .when('/play/:id', {
                templateUrl: 'views/Play.html',
                controller: 'PlayCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    .run(function ($rootScope, $location, $routeParams)
    {
        $rootScope.navigateTo = function (path)
        {
            console.log("Navigating to: " + path);
            $location.path(path);
        };

        $rootScope.currentPathClass = function (path)
        {
            return path == $location.$$path ? 'current' : '';
        }
    });
