(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffTopMenu', function() {
            return {
                restrict: 'E',
                scope: {
                    title: '=',
                    color: '='
                },
                templateUrl: 'components/top-menu/top-menu.html',
                controller: ['$location', controller],
                controllerAs: 'topMenuCtrl',
                bindToController: true
            };
        });


    function controller($location) {
        var vm = this;

        vm.titleClicked = function(){
            $location.search({});
            $location.path('/home');
        };

        vm.redirect = function(path){
            $location.search({});
            $location.path(path);
        };
    }
}());



