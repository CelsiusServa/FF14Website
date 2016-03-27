(function () {
    "use strict";

    angular.module('finalFantasy', [
        'ngRoute',
        'ngAnimate',
        'ngMaterial',
        'finalFantasy.pages',
        'finalFantasy.components',
        'finalFantasy.utils'
    ])
    .config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'pages/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .when('/raidnet', {
                templateUrl: 'pages/raidnet/raidnet.html',
                controller: 'RaidnetController',
                controllerAs: 'raidnetCtrl'
            })
            .when('/article', {
                templateUrl: 'pages/article/article.html',
                controller: 'ArticleController',
                controllerAs: 'articleCtrl'
            })
            .when('/stream', {
                templateUrl: 'pages/stream/stream.html',
                controller: 'StreamController',
                controllerAs: 'streamCtrl'
            })
            .when('/streamers', {
                templateUrl: 'pages/streamers/streamers.html',
                controller: 'StreamersController',
                controllerAs: 'streamersCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('grey');

            //red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green,
            // lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
    }])
}());