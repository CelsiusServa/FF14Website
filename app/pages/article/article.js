(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('ArticleController', ['$route', controller]);

    function controller($route) {
        var vm = this;

        $('.parallax-mirror').remove();

        var routeParams = $route.current.params;
        vm.articleId = routeParams.articleId;
    }
}());