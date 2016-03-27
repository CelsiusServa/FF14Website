(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('RaidnetController', ['highscoreService', controller]);

    function controller(highscoreService) {
        var vm = this;

        $('.parallax-mirror').remove();

        highscoreService.getHighscores('a1s')
            .then(setHighscores, failedToObtainHighscores);

        function setHighscores(highscores){
            vm.highscores = highscores;
        }

        function failedToObtainHighscores(highscores){
            //show error message
        }
    }
}());