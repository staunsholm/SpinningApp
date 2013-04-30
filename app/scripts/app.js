'use strict';

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
    });
