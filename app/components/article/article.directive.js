(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffArticle', function () {
            return {
                restrict: 'E',
                scope: {
                    articleId: '=',
                    showNav: '=',
                    menu: '='
                },
                templateUrl: 'components/article/article.html',
                controller: ['$location', 'articleService', controller],
                controllerAs: 'ffArticleCtrl',
                bindToController: true
            };
        });

    function controller($location, articleService) {
        var vm = this;

        if(vm.articleId){
            articleService.getArticle(vm.articleId)
                .then(function (article) {
                    vm.article = article;
                })
                .catch(function (){
                    //error
                });
        }

        vm.goToArticle = function(){
            $location.path("/article").search({articleId: vm.articleId});
        };

    }
}());



