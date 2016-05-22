(function () {
    "use strict";

    angular.module('finalFantasy.utils')
        .directive('preventScroll', function () {
        return{
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            element.bind( 'mousewheel DOMMouseScroll', function ( e ) {
                var e0 = e.originalEvent;
                var delta = e0.wheelDelta || -e0.detail;

                this.scrollTop += ( delta < 0 ? 1 : -1 ) * 80;
                e.preventDefault();
            });
        }
    });

}());