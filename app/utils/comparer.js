(function () {
    "use strict";

    angular.module('finalFantasy.utils')
        .factory('comparerUtil', util);

    function util() {

        return {
            compare: compare
        };


        function compare(obj1, obj2, comparisonData){
            for(var i = 0; i < comparisonData.length; i++){
                if(compareValues(obj1[comparisonData[i].property], obj2[comparisonData[i].property], comparisonData[i].comparison)){
                    return -1
                } else if (compareValues(obj2[comparisonData[i].property], obj1[comparisonData[i].property], comparisonData[i].comparison)){
                    return 1
                }
            }
            return 0;
        }

        function compareValues(v1, v2, comparer){
            if(comparer == 'gt'){
                return v1 > v2;
            } else if(comparer == 'gte') {
                return v1 >= v2;
            } else if(comparer == 'lt'){
                return v1 < v2;
            } else if(comparer == 'lte'){
                return v1 <= v2;
            } else if(comparer == 'equal'){
                return v1 == v2;
            }
            throw 'comparison not found';
        }
    }
}());