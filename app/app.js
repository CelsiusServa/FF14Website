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
            .otherwise({
                redirectTo: '/home'
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('blue')
            .backgroundPalette('grey').dark()
    }])
}());