(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('HomeController', ['$location', '$timeout', 'articleService', 'streamService', controller]);

    function controller($location, $timeout, articleService, streamService) {
        var vm = this;

        $('.parallax-mirror').remove();

        $timeout(function () {
            $('.parallax-window.banner.content-block').parallax({
                imageSrc: 'assets/images/fc_house.png',
                speed: '0',
                position: 'top'
            });
            $('#content1.parallax-window.content-block').parallax({imageSrc: 'assets/images/a5.png', speed: '0.2'});
            $('#content2.parallax-window.content-block').parallax({
                imageSrc: 'assets/images/a6.png',
                speed: '0.2',
                position: 'top'
            });
            $('#content3.parallax-window.content-block').parallax({
                imageSrc: 'assets/images/a7.png',
                speed: '0.2',
                position: 'top'
            });
        }, 0);

        streamService.getStreams()
            .then(function (streams) {
                vm.streams = streams.slice(0, 3);
            });

        articleService.getArticles()
            .then(function (articles) {
                vm.articles = articles.slice(0, 3);
            });

        vm.viewStreamers = function(){
            $location.search({});
            $location.path('/streamers')
        };

        vm.viewArticles = function (){
            $location.search({});
            $location.path("/articles");
        }
    }
}());