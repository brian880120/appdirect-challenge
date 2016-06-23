(function(angular) {
    'use strict';

    angular.module('appDirect.twitterDashboard')
        .service('appDirect.twitterDashboard.commons.TwitterDashboardService', TwitterDashboardService);

    TwitterDashboardService.$inject = [
        'appDirect.twitterDashboard.commons.TwitterDashboardFactory'
    ];

    function TwitterDashboardService (TwitterDashboardFactory) {
        this.getTwitters = getTwitters;

        function getTwitters(count, name) {
            return TwitterDashboardFactory.twitterResource(count, name).query().$promise;
        }
    }
})(angular);
