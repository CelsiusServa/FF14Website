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
                    }]
            },
            helloFriends: {
                title: 'Hello friends!',
                articleId: 'helloFriends',
                author: 'Lilli Gant',
                image: 'lilli-gant.png',
                date: Date.parse("5/27/2016 12:46 PM"),
                blocks: [
                    {
                        type: 'text',
                        text: 'Celsius finally kicked me in the butt to write something ;_; mostly this is going to be updates on the FC and maybe rambling, IDK yet but please look forward to it!'
                    },
                    {
                        type: 'text',
                        text: 'Currently we have 90 members and counting! A big welcome to Megumi Megu, Khyrou Johto, Kirito Kakashi, Noctis Rahland Xylina Leuana who joined this week! And welcome back to Servas Wellington who has returned from Hiatus!'
                    },
                    {
                        type: 'text',
                        text: 'Our raid groups are doing very well, with both groups 1 and 2 seeing Winged Brute Justice this week and group 3 starting on their A8 progression.  Best of luck everyone!'
                    },
                    {
                        type: 'text',
                        text: 'Um I might ramble about various things later on depending if people are interested >.< WE SHALL SEE.'
                    },
                    {
                        type: 'text',
                        text: 'Goodluck and stay salty everyone!'
                    },
                    {
                        type: 'text',
                        text: '~Lilli Gant'
                    }]
            },
            upcomingEvents: {
                title: 'Upcoming Events',
                articleId: 'upcomingEvents',
                author: 'Lilli Gant',
                image: 'final-fantasy-xiv-upcoming-events.jpg',
                date: Date.parse("6/1/2016 10:02 PM"),
                blocks: [
                    {
                        type: 'text',
                        text: 'Hello FC friends! o7 with patch 3.2 wrapping up we have a ton of FC events for all walks of life coming up for FC bonding and what not!'
                    },
                    {
                        type: 'text',
                        text: 'First of all welcome to all our new members this week, Megumi Megu, Etoile Mourante, Chin\'chin Bin, Xelest Yesia and Navi Blue! We’re super happy to have you join us and hope you enjoy your time here!'
                    },
                    {
                        type: 'text',
                        text: 'A big thank you to Riku Kurayami for buying  VIP membership with the Gilded Pony for the entire FC!  For those interested there is an event on the 11th of June that you’re more than welcome to attend. Message Riku Kurayami in game for more information.'
                    },
                    {
                        type: 'text',
                        text: 'Next is a personal project of mine, I’m looking to see if we can get some in house 4v4 pvp matches going, if we can get enough interest I’ll put an offical date for when we can beat the shit out of each other! Just message me in game (Lilli Gant) with what role you would want to play and hopefully we can get enough people!  If you’re new to pvp or a vet it doesn’t matter this is entirely an event for fun!'
                    },
                    {
                        type: 'text',
                        text: 'Last but def not least, on the 18th/19th of June we have a Nidhogg EX learning/clear event!  Those of us in FC statics are taking time out of our busy *cough* raiding lives to help other fc members learn/clear Nidhogg EX so we don’t have to all suffer in Party Finder \o/ Message Ka Lin in game for more information and to reserve a spot!'
                    }]
            },
            teamCaesiumAurideClearsa8s: {
                title: 'Team Caesium Auride Clears A8S',
                articleId: 'teamCaesiumAurideClearsa8s',
                author: 'Celsius Serva',
                image: 'final-fantasy-xiv-caesium-auride-a8s-clear.jpg',
                date: Date.parse("6/4/2016 11:10 AM"),
                blocks: [
                    {
                        type: 'text',
                        text: 'After a long time and through computer breakdowns and video game conferences amongst other raid down time, Team Caesium Auride(golden salt) clears A8S!'
                    },
                    {
                        type: 'text',
                        text: 'Ashildr Bloodfury(Wyrm, <span class="flair-small flair-paladin"></span>), ' +
                        'Licca Skelburg(NaCl, <span class="flair-small flair-warrior"></span>), ' +
                        'Celsius Serva(NaCl, <span class="flair-small flair-scholar"></span>), ' +
                        'Thatyani Robbi(-HEC-, <span class="flair-small flair-whitemage"></span>), ' +
                        'Jara\'hal Noykin(CC, <span class="flair-small flair-monk"></span>), ' +
                        'Joe Never(TARP, <span class="flair-small flair-dragoon"></span>), ' +
                        'Purgatory Blackflame(NaCl, <span class="flair-small flair-blackmage"></span>), ' +
                        'Vyncent Fairclough(NaCl, <span class="flair-small flair-machinist"></span>)'
                    },
                    {
                        type: 'twitchVideo',
                        url: 'https://player.twitch.tv/?video=v70405993&autoplay=false',
                        text: '<p style="color:red; font-weight:bold;">WARNING, VERY LOUD</p>'
                    },
                    {
                        type: 'text',
                        text: 'Watch Joe Never at ' +
                        '<a style="color:white" href="http://sodiumchloride-nacl.rhcloud.com/#/stream?streamer=joeneverfails">http://sodiumchloride-nacl.rhcloud.com/#/stream?streamer=joeneverfails</a> or' +
                        ' <a style="color:white" href="https://www.twitch.tv/joeneverfails">https://www.twitch.tv/joeneverfails</a>  '
                    }]
            },
        };

        return {
            getArticle: getArticle,
            getArticles: getArticles
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
            return articlesToSort.sort(function(a, b) { return b.date - a.date; })
        }
    }
}());