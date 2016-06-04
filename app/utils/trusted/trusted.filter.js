(function () {
    "use strict";

    angular.module('finalFantasy.utils')
        .filter('trustedUrl', ['$sce', filterUrl]);

    function filterUrl ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    };

    angular.module('finalFantasy.utils')
        .filter('trustedHtml', ['$sce', filterHtml]);

    function filterHtml ($sce) {
        return function (html) {
            return $sce.trustAsHtml(html);
        };
    };

}());