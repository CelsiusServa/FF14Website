(function () {
    "use strict";

    angular.module('finalFantasy.utils')
        .factory('streamService', ['$q', '$http', 'comparerUtil', service]);

    function service($q, $http, comparerUtil) {

        var streamComparisons = [
            {property: 'status', comparison: 'gt'},
            {property: 'priority', comparison: 'gt'},
            {property: 'viewers', comparison: 'gt'},
            {property: 'lastOnline', comparison: 'gt'},
            {property: 'name', comparison: 'lt'}
        ];

        var streamers = [
            {streamer: 'ilovebuzzcut', ign: 'Puris Bordeaux', fc: 'NaCl', priority: 1},
            {streamer: 'slamuraishaq', ign: 'Bad Manners', fc: 'NaCl', priority: 1},
            {streamer: 'khyrou', ign: 'Khyrou Johto', fc: 'NaCl', priority: 1},
            {streamer: 'joeneverfails', ign: 'Joe Never', fc: 'TARP', priority: 0},
            {streamer: 'blackmoreknight', ign: 'Ashildr Bloodfury', fc: 'Wyrm', priority: 0}
        ];

        var streamerDetails = {
            ilovebuzzcut: {ign: 'Puris Bordeaux', fc: 'NaCl'},
            slamuraishaq: {ign: 'Bad Manners', fc: 'NaCl'},
            khyrou: {ign: 'Khyrou Johto', fc: 'NaCl'},
            joeneverfails: {ign: 'Joe Never', fc: 'TARP'},
            blackmoreknight: {ign: 'Ashildr Bloodfury', fc: 'Wyrm'}
        };

        return {
            getStreams: getStreams,
            getStream: getStream
        };

        function getStreams() {
            var deferred = $q.defer();


            var streamCount = 0;
            var streams = [];
            streamers.each(function (s) {

                getStream(s.streamer)
                    .then(function (stream) {
                        stream.priority = s.priority;
                        var details = streamerDetails[s.streamer];
                        stream.ign = details.ign;
                        stream.fc = details.fc;
                        streams.add(stream);
                    })
                    .finally(function () {
                        streamCount++;
                        if (streamCount == streamers.length) {
                            streams = streams.sort(function (s1, s2) {
                                return comparerUtil.compare(s1, s2, streamComparisons);
                            });
                            deferred.resolve(streams);
                        }
                    });
            });

            return deferred.promise;
        }

        function getStream(streamer, size, autoplay) {
            var deferred = $q.defer();

            var details = streamerDetails[streamer];

            var stream = {
                streamer: streamer,
                url: 'http://player.twitch.tv/?channel=' + streamer,
                status: 0,
                viewers: '',
                game: '',
                preview: 'http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png',
                ign: details.ign,
                fc: details.fc
            };

            if (!autoplay) {
                stream.url = stream.url + '&!autoplay';
            }
            $http.get('https://api.twitch.tv/kraken/streams/' + streamer)
                .success(function (channel) {
                    if (!channel || channel.stream == null) {
                        $http.get('https://api.twitch.tv/kraken/channels/' + streamer)
                            .success(function (channel) {
                                var streamData = channel;
                                stream.game = streamData.game;
                                if (size && size == 'large') {
                                    stream.preview = streamData.profile_banner ? streamData.profile_banner : stream.preview;
                                } else {
                                    stream.preview = streamData.logo ? streamData.logo : stream.preview;
                                }

                                stream.name = streamData.display_name;
                                stream.lastOnline = new Date(streamData.updated_at);
                                stream.status = 0;
                                deferred.resolve(stream);
                            });
                    } else {
                        var streamData = channel.stream;
                        stream.status = 1;
                        stream.viewers = streamData.viewers;
                        stream.game = streamData.game;
                        if (size && size == 'large') {
                            stream.preview = streamData.channel.profile_banner ? streamData.channel.profile_banner : stream.preview;
                        } else {
                            stream.preview = streamData.channel.logo ? streamData.channel.logo : stream.preview;
                        }

                        stream.name = streamData.channel.display_name;
                        stream.description = streamData.channel.status;
                        deferred.resolve(stream);
                    }
                });
            return deferred.promise;
        }
    }
}());