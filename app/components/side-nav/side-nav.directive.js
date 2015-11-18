(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffSideNav', function() {
            return {
                restrict: 'E',
                scope: {
                },
                templateUrl: 'components/side-nav/side-nav.html',
                controller: controller,
                controllerAs: 'sideNavCtrl',
                bindToController: true
            };
        });


    function controller() {
        var vm = this;

        vm.elements = [ "Titan", "Ifrit", "Garuda" ];

        vm.elementClicked = function(element){
            console.log(element);
        }

    }
}());