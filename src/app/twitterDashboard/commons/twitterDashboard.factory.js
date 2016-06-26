(function(angular) {
    'use strict';

    angular.module('appDirect.twitterDashboard')
        .service('appDirect.twitterDashboard.commons.TwitterDashboardFactory', TwitterDashboardFactory);

    TwitterDashboardFactory.$inject = [
        '$resource'
    ];

    function TwitterDashboardFactory ($resource) {
        return {
            twitterResource: twitterResource
        };

        function twitterResource(twitterCount, name) {
            return $resource('https://gm-twitter-proxy.herokuapp.com/1.1/statuses/user_timeline.json', {
                count: twitterCount,
                screen_name: name
            });
        }
    }
})(angular);