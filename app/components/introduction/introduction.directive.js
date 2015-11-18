(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffIntroduction', function () {
            return {
                restrict: 'E',
                templateUrl: 'components/introduction/introduction.html',
                controller: controller,
                controllerAs: 'introductionCtrl',
                bindToController: true
            };
        });


    function controller() {
        var vm = this;
    }
}());



