(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffTopMenu', function() {
            return {
                restrict: 'E',
                scope: {
                    title: '='
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
            $location.path('/home');
        }

        vm.homeClicked = function(){
            $location.path('/home');
        }

        vm.highscoresClicked = function(){
            $location.path('/raidnet');
        }
    }
}());



