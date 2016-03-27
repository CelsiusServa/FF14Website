(function () {
    "use strict";

    angular.module('finalFantasy.utils')
        .factory('jobService', ['$q', service]);

    function service($q) {

        return {
            getArticle: getArticle
        };


        function getArticle() {
            return jobs;
        }
    }
}());