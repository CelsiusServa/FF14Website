(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffSideNav', function() {
            return {
                restrict: 'E',
                scope: {
                },
                templateUrl: 'components/side-nav/side-nav.html',
                controller: ['$location', controller],
                controllerAs: 'sideNavCtrl',
                bindToController: true
            };
        });


    function controller($location) {
        var vm = this;

        vm.articles = [
            { title:'Titan', articleId: 'titan' },
            { title:'Ifrit', articleId: 'ifrit' },
            { title:'Garuda', articleId: 'garuda' }
        ];

        vm.articleClicked = function(article){
            $location.path("/article").search({articleId: article.articleId});
        }
    }
}());