(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('StreamController', ['$route', controller]);

    function controller($route) {
        var vm = this;

        $('.parallax-mirror').remove();

        var routeParams = $route.current.params;
        vm.streamer = routeParams.streamer;
    }
}());