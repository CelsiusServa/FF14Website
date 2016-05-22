(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('StreamersController', ['streamService', controller]);

    function controller(streamService) {
        var vm = this;

        $('.parallax-mirror').remove();

        vm.streams = streamService.getStreams()
            .then(function (streams) {
                vm.streamRow = [];
                for(var i = 0; i*3 < streams.length; i++){
                    vm.streamRow.add([streams.slice(i*3, (i*3)+3)]);
                }
            });
    }
}());