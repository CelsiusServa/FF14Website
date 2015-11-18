(function () {
    "use strict";

    angular.module('finalFantasy.components')
        .directive('ffHighscore', function () {
            return {
                restrict: 'E',
                scope: {
                    highscores: '='
                },
                templateUrl: 'components/highscore/highscore.html',
                controller: ['$scope', 'jobService', controller],
                controllerAs: 'highscoreCtrl',
                bindToController: true
            };
        });


    function controller($scope, jobService) {
        var vm = this;
        vm.playerSearchText = null;
        vm.jobSearchText = null;
        vm.filteredHighscores = vm.highscores.scores;
        vm.selectedPlayers = [];
        vm.selectedJobs = [];
        vm.jobs = jobService.getJobs();

        vm.searchPlayer = function() {
            return (vm.playerSearchText  ? vm.highscores.scores.filter(function (s) {
                return s.name.startsWith(vm.playerSearchText , 0 , false);
            }) : []).unique(function (s) { return s.name; });
        };

        vm.searchJob = function() {
            return vm.jobSearchText ? vm.jobs.filter(function (j) {
                return j.name.startsWith(vm.jobSearchText , 0 , false);
            }) : [];
        };

        $scope.$watch('highscoreCtrl.selectedPlayers', filtersChanged, true);
        $scope.$watch('highscoreCtrl.selectedJobs', filtersChanged, true);

        function filtersChanged(){
            vm.filteredHighscores = vm.highscores.scores;

            if(vm.selectedPlayers && !vm.selectedPlayers.isEmpty()){
                vm.filteredHighscores = vm.filteredHighscores.filter(function (s) {
                    return vm.selectedPlayers.some(function(sp) { return sp.name === s.name } );
                });
            }
            if(vm.selectedJobs && !vm.selectedJobs.isEmpty()){
                vm.filteredHighscores = vm.filteredHighscores.filter(function (s) {
                    return vm.selectedJobs.some(function(sj) { return sj.ui === s.job } );
                });
            }
        }
    }
}());



