(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffTopHighscore', function () {
            return {
                restrict: 'E',
                scope: {
                    top: '@',
                    job: '=',
                    highscores: '='
                },
                templateUrl: 'components/top-highscore/top-highscore.html',
                controller: ['$scope', 'jobService', controller],
                controllerAs: 'topHighscoreCtrl',
                bindToController: true
            };
        });

    function controller($scope, jobService) {
        var vm = this;
        vm.jobs = jobService.getJobs();
        vm.players = vm.highscores.scores.filter(function (s) { return s.job === vm.job.ui }).sortBy('dps', true).first(vm.top);
    }
}());



