(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('HomeController', ['$route', controller]);

    function controller($route) {
        var vm = this;

        var routeParams = $route.current.params;

        vm.articleIndex = 'titanArticle';
    }
}());