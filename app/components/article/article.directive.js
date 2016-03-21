(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffArticle', function () {
            return {
                restrict: 'E',
                scope: {
                    articleId: '='
                },
                templateUrl: 'components/article/article.html',
                controller: controller,
                controllerAs: 'ffArticleCtrl',
                bindToController: true
            };
        });

    function controller() {
        var vm = this;

        console.log(this.articleId);
    }
}());



