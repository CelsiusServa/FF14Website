(function () {
    "use strict";

    angular.module('finalFantasy.utils')
        .factory('jobService', ['$q', service]);

    function service($q) {

        var jobs = [
            {
                name: 'paladin',
                ui: 'paladin'
            },
            {
                name: 'black mage',
                ui: 'blackmage'
            },
            {
                name: 'warrior',
                ui: 'warrior'
            },
            {
                name: 'monk',
                ui: 'monk'
            },
            {
                name: 'dragoon',
                ui: 'dragoon'
            },
            {
                name: 'bard',
                ui: 'bard'
            },
            {
                name: 'white mage',
                ui: 'whitemage'
            },
            {
                name: 'summoner',
                ui: 'summoner'
            },
            {
                name: 'scholar',
                ui: 'scholar'
            },
            {
                name: 'ninja',
                ui: 'ninja'
            },
            {
                name: 'astrologian',
                ui: 'astrologian'
            },
            {
                name: 'dark knight',
                ui: 'darkknight'
            },
            {
                name: 'machinist',
                ui: 'machinist'
            }
        ];

        return {
            getJobs: getJobs
        };


        function getJobs() {
            return jobs;
        }
    }
}());