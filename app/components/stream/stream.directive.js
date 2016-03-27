(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffStream', function () {
            return {
                restrict: 'E',
                scope: {
                    streamer: '=',
                    autoplay: '=',
                    preview: '=',
                    size: '='
                },
                templateUrl: 'components/stream/stream.html',
                controller: ['$scope', '$sce', '$location', 'streamService', controller],
                controllerAs: 'ffStreamCtrl',
                bindToController: true
            };
        });

    function controller($scope, $sce, $location, streamService) {
        var vm = this;

        vm.goToStream = function(){
            $location.path("/stream").search({streamer: vm.streamer});
        };

        vm.trustUrl = function (url) {
            return $sce.trustAsResourceUrl(url);
        };

        streamService.getStream(vm.streamer, vm.size, vm.autoplay)
            .then(function (stream) {
                vm.stream = stream;
            });
    }
}());



