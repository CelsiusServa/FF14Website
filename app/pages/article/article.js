(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('ArticleController', controller);

    function controller($route) {
        var vm = this;
        var routeParams = $route.current.params;
        vm.articleId = routeParams.articleId;
    }
}());