(function () {
    "use strict";

    angular.module('finalFantasy.utils')
        .factory('articleService', ['$q', service]);

    function service($q) {
        var articles = {
            articleSectionCreated: {
                title: 'Article Section Created!',
                articleId: 'articleSectionCreated',
                author: 'Celsius Serva',
                image: 'demon-tome.jpg',
                date: Date.parse("5/22/2016 1:07 PM"),
                blocks: [
                    {
                        type: 'text',
                        text: 'Behold! The newly created article section. ' +
                        'With this we can now do incessant rambling of unnecessary things to our hearts content! '
                    },
                    {
                        type: 'text',
                        text: 'The articles can contain anything from images to twitch content to youtube videos(I withhold the right to tell you to go fuck yourself depending on the content though o7).'
                    },
                    {
                        type: 'text',
                        text: 'To submit an article please send an e-mail to celsius.serva@gmail.com or contact Celsius Serva in-game.'
                    },]
            },
        };

        return {
            getArticle: getArticle,
            getArticles: getArticles,
        };


        function getArticle(articleId) {
            var deferred = $q.defer();

            deferred.resolve(articles[articleId]);

            return deferred.promise;
        }

        function getArticles(){
            var deferred = $q.defer();

            var articleArray = [];

            var articleKeys = Object.keys(articles);
            for (var i = 0; i < articleKeys.length; i++) {
                articleArray.push(articles[articleKeys[i]]);
            }

            deferred.resolve(sortArticles(articleArray));

            return deferred.promise;
        }

        function sortArticles(articlesToSort){
            return articlesToSort.sort(function(a, b) { return a.date - b.date; })
        }
    }
}());