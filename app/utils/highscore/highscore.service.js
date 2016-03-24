(function () {
    "use strict";

    angular.module('finalFantasy.utils')
        .factory('highscoreService', ['$q', service]);

    function service($q) {
        var fights = {
            a1s: {
                image: 'a1s.jpg',
                scores: [
                    //{dps: 1011, job: "dragoon", name: "Jezus Ofnazareth", static: "Swiftcast"},
                    //{dps: 1011, job: "dragoon", name: "Hrudolf Dagson", static: "Team East Cleveland"},
                    //{dps: 1003, job: "warrior", name: "Akane Kurashiki"},
                    //{dps: 988, job: "summoner", name: "Fyeya Herald"},
                    //{dps: 983, job: "ninja", name: "Keppaku Kakumei"},
                    //{dps: 983, job: "warrior", name: "Lucelia Ultima"},
                    //{dps: 970, job: "monk", name: "Silver Blackmill"},
                    //{dps: 970, job: "dragoon", name: "White Guy"},
                    //{dps: 968, job: "blackmage", name: "Trust Worthy"},
                    //{dps: 961, job: "ninja", name: "Kaitlynn Storm"},
                    //{dps: 955, job: "ninja", name: "Alex Gilgamesh"},
                    //{dps: 951, job: "dragoon", name: "Licca Skelburg"},
                    //{dps: 946, job: "blackmage", name: "Jarry Arcadia"},
                    //{dps: 944, job: "machinist", name: "Merovius Gladius"},
                    //{dps: 934, job: "dragoon", name: "Jacob Habluetzel"},
                    //{dps: 928, job: "monk", name: "Vyncent Fairclough", static: "Team Hawkward"},
                    //{dps: 917, job: "dragoon", name: "Layna Langsuyar", static: "Team Hawkward"},
                    //{dps: 912, job: "warrior", name: "Blair Crosszeria"},
                    //{dps: 907, job: "blackmage", name: "Kitkat Purrrrfect"},
                    //{dps: 898, job: "bard", name: "Haru Yuki"},
                    //{dps: 897, job: "monk", name: "Ayla Gahtia"},
                    //{dps: 897, job: "warrior", name: "Kilva Deathbringer"},
                    //{dps: 890, job: "warrior", name: "Doctor Badfish"},
                    //{dps: 879, job: "bard", name: "Sahja Betwanha"},
                    //{dps: 871, job: "warrior", name: "Tira Kukuyadi"},
                    //{dps: 869, job: "monk", name: "Kairi Tsubaki"},
                    //{dps: 854, job: "blackmage", name: "False Name"},
                    //{dps: 849, job: "dragoon", name: "Lauridel Dyanthis"},
                    //{dps: 847, job: "ninja", name: "Kairi Tsubaki"},
                    //{dps: 846, job: "warrior", name: "Ryu Aseroth"},
                    //{dps: 844, job: "dragoon", name: "Emperor Mateus"},
                    //{dps: 834, job: "machinist", name: "Killua Khan"},
                    //{dps: 828, job: "ninja", name: "Shampoo Kitty"},
                    //{dps: 810, job: "ninja", name: "Mina Hakuei"},
                    //{dps: 801, job: "bard", name: "King Jahsen"},
                    //{dps: 800, job: "darkknight", name: "Sir Ravioli"},
                    //{dps: 789, job: "bard", name: "Laztiriaz Katz"},
                    //{dps: 785, job: "blackmage", name: "Hazy Deepsky"},
                    //{dps: 783, job: "summoner", name: "Wicedine Meriah"},
                    //{dps: 783, job: "monk", name: "Andariella Fisto"},
                    //{dps: 774, job: "darkknight", name: "Aries Arclight"},
                    //{dps: 754, job: "machinist", name: "Twinkle Shine"},
                    //{dps: 741, job: "machinist", name: "Aurica Nestmile"},
                    //{dps: 734, job: "bard", name: "Nine Yuki"},
                    //{dps: 733, job: "blackmage", name: "Morgan Noire"},
                    //{dps: 697, job: "darkknight", name: "Vandark Norr"},
                    //{dps: 695, job: "warrior", name: "Sibyll Belmont"},
                    //{dps: 692, job: "paladin", name: "Dannabis Forwantie"},
                    //{dps: 683, job: "darkknight", name: "Cobalius Revan"},
                    //{dps: 670, job: "warrior", name: "Teufels Advokatze"},
                    //{dps: 650, job: "darkknight", name: "Nani Sun"},
                    //{dps: 619, job: "paladin", name: "Johnny Joestar"},
                    //{dps: 602, job: "warrior", name: "Colldor Stone"},
                    //{dps: 591, job: "paladin", name: "Edith Clarke"},
                    //{dps: 590, job: "warrior", name: "Relm Xerath"},
                    //{dps: 587, job: "scholar", name: "Celsius Serva", static: "Team Hawkward"},
                    //{dps: 575, job: "warrior", name: "Akazu Neko"},
                    //{dps: 573, job: "warrior", name: "Zexion Himura"},
                    //{dps: 549, job: "darkknight", name: "Iolaine Haustefort"},
                    //{dps: 537, job: "warrior", name: "Sigma Klim"},
                    //{dps: 536, job: "warrior", name: "Mordred Blackheart"},
                    //{dps: 534, job: "warrior", name: "Miiria Secura"},
                    //{dps: 485, job: "scholar", name: "Wicedine Meriah"},
                    //{dps: 485, job: "scholar", name: "Sigma Klim"},
                    //{dps: 478, job: "darkknight", name: "Alex Gilgamesh"},
                    //{dps: 466, job: "darkknight", name: "Morcego Gee"},
                    //{dps: 452, job: "paladin", name: "Tao Meow"},
                    //{dps: 434, job: "darkknight", name: "Rose Tommo"},
                    //{dps: 428, job: "paladin", name: "Cobalius Revan"},
                    //{dps: 415, job: "darkknight", name: "Rose Eidolon"},
                    //{dps: 411, job: "darkknight", name: "Athela Steele"},
                    //{dps: 344, job: "scholar", name: "Anna Tellah"},
                    //{dps: 328, job: "paladin", name: "Lamynka Ka"},
                    //{dps: 228, job: "astrologian", name: "Twinkle Shine"},
                    //{dps: 228, job: "astrologian", name: "Illucid Evenstar", static: "Team Hawkward"},
                    //{dps: 216, job: "scholar", name: "Rhise Arktu'rah"},
                    //{dps: 203, job: "whitemage", name: "Auden Brenton"},
                    //{dps: 177, job: "whitemage", name: "Lupa Luna"},
                    //{dps: 169, job: "scholar", name: "Goddess Angelica"},
                    //{dps: 165, job: "scholar", name: "Mother Abbess"},
                    //{dps: 151, job: "scholar", name: "Talya Roshi"},
                    //{dps: 132, job: "whitemage", name: "Mo'raya Amnin "},
                    //{dps: 119, job: "whitemage", name: "Illucid Evenstar", static: "Team Hawkward"},
                    //{dps: 114, job: "astrologian", name: "Sigma Klim"},
                    //{dps: 109, job: "scholar", name: "Mina Crest"},
                    //{dps: 88, job: "whitemage", name: "Nightmare Deathroer"},
                    //{dps: 73, job: "scholar", name: "Ayla Gahtia"},
                    //{dps: 67, job: "astrologian", name: "Putzy Awnfleek"},
                    //{dps: 40, job: "whitemage", name: "Teku Hekate"},
                    //{dps: 31, job: "whitemage", name: "Rinne Kokonoe"},
                    //{dps: 23, job: "scholar", name: "Helena Roselia"},
                    //{dps: 11, job: "whitemage", name: "Dark Preistess"},
                    //{dps: 9.3, job: "whitemage", name: "Slan Lightgazer"},
                    //{dps: 7, job: "whitemage", name: "Eternal Win"},
                    //{dps: 6, job: "whitemage", name: "Tatsuo Mirca"},
                    //{dps: 2, job: "whitemage", name: "Asuna Taiga"},
                    {dps: 1277, job: "summoner", name: "Layna Langsuyar", static: "Team Hawkward"},
                    {dps: 1271, job: "summoner", name: "Valerium Falcon", static: "Team Hawkward"},
                    {dps: 1229, job: "summoner", name: "Daemon Dragonborn"},
                    {dps: 1209, job: "dragoon", name: "Zeo Altrius"},
                    {dps: 1176, job: "bard", name: "Sana Cetonis", static: "TOP KEK"},
                    {dps: 1154, job: "ninja", name: "Katarina Du'couteau"},
                    {dps: 1141, job: "blackmage", name: "Toef Steel"},
                    {dps: 1124, job: "monk", name: "Paru Norbir", static: "Team East Cleveland"},
                    {dps: 1123, job: "blackmage", name: "Valerium Falcon", static: "Team Hawkward"},
                    {dps: 1117, job: "machinist", name: "Vyncent Fairclough", static: "Team Hawkward"},
                    {dps: 1107, job: "dragoon", name: "Kirisaki Makoto"},
                    {dps: 1094, job: "monk", name: "Edith Clarke"},
                    {dps: 1093, job: "dragoon", name: "Mizore Yuki"},
                    {dps: 1091, job: "ninja", name: "Mizore Yuki"},
                    {dps: 1085, job: "dragoon", name: "Jaelin Shadowfrost", static: "Team Hawkward"},
                    {dps: 1071, job: "monk", name: "Marsh Tia", static: "Team Pokemon"},
                    {dps: 1070, job: "dragoon", name: "Sam Snook"},
                    //{dps: 1069, job: "blackmage", name: "Layna Langsuyar", static: "Team Hawkward"},
                    //{dps: 1058, job: "monk", name: "Blibs Muhgurk", static: "TOP KEK"},
                    //{dps: 1046, job: "dragoon", name: "Akazu Neko", static: "TOP KEK"},
                    //{dps: 1037, job: "dragoon", name: "Gicien Logan"},
                    //{dps: 1029, job: "summoner", name: "Slippery Pearl"},
                    //{dps: 1023, job: "machinist", name: "Sigma Klim"},
                    //{dps: 1021, job: "blackmage", name: "Mariko Santiko", static: "Team Pokemon"},
                    //{dps: 1020, job: "bard", name: "Zuri Akashi", static: "Team Pokemon"},
                    //{dps: 1019, job: "ninja", name: "Caffeinated Glutes"},
                    //{dps: 1018, job: "bard", name: "Aphrodisia Nelhah", static: "Team Recovery"},
                    //{dps: 1017, job: "bard", name: "Twinkle Shine"}
                ]
            }
            ,
            a2s: [
                {
                    dps: 2304,
                    class: "summoner",
                    name: "Valerium Falcon",
                    static: 'Team Hawkward'
                }
            ]


        };


        return {
            getHighscores: getHighscores
        };


        function getHighscores(fight) {
            var deferred = $q.defer();

            if (fight && fights[fight]) {
                deferred.resolve(fights[fight]);
            } else {
                deferred.reject();
            }

            return deferred.promise;
        }
    }
}());