(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffSideNav', function () {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'components/side-nav/side-nav.html',
                controller: ['$location', 'articleService', controller],
                controllerAs: 'sideNavCtrl',
                bindToController: true
            };
        });

    function controller($location, articleService) {
        var vm = this;

        articleService.getArticles()
            .then(function (articles) {
                vm.articles = articles;
            })
            .catch(function () {
                //error
            });


        vm.articleClicked = function (article) {
            $location.path("/article").search({articleId: article.articleId});
        }
    }
}());