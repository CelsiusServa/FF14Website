(function () {
    "use strict";

    angular.module('finalFantasy.pages')
        .controller('HomeController', ['$route', '$timeout', controller]);

    function controller($route, $timeout) {
        var vm = this;
        $timeout(function() {
            $('.parallax-window.banner').parallax({imageSrc: 'assets/images/fc_house.png', speed: '0', positionY: '-200px' });
            $('#content1.parallax-window.content-block').parallax({imageSrc: 'assets/images/a5.png', speed: '0.2' });
            $('#content2.parallax-window.content-block').parallax({imageSrc: 'assets/images/a6.png', speed: '0.2', position: 'top' });
            $('#content3.parallax-window.content-block').parallax({imageSrc: 'assets/images/a7.png', speed: '0.2', position: 'top' });
        }, 100);


        var routeParams = $route.current.params;
        vm.articleIndex = 'titanArticle';
    }
}());