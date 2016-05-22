(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('ArticlesController', ['$location', 'articleService', controller]);

    function controller($location, articleService) {
        var vm = this;

        $('.parallax-mirror').remove();

        vm.articles = articleService.getArticles()
            .then(function (articles) {
                vm.articlesRow = [];
                for(var i = 0; i*3 < articles.length; i++){
                    vm.articlesRow.add([articles.slice(i*3, (i*3)+3)]);
                }
            });
    }
}());