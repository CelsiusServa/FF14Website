(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('MainController', ['$location', controller]);

    function controller($location) {
        var vm = this;
        vm.title = "Sodium Chloride";

        $('.parallax-mirror').remove();

        function init(){
        }

        init();
    }
}());