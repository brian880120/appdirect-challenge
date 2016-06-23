(function(angular) {
    'use strict';

    angular.module('appDirect.twitterDashboard')
        .service('appDirect.twitterDashboard.commons.TwitterDashboardService', TwitterDashboardService);

    TwitterDashboardService.$inject = [
        '$localStorage',
        'appDirect.twitterDashboard.commons.TwitterDashboardFactory'
    ];

    function TwitterDashboardService ($localStorage, TwitterDashboardFactory) {
        this.getTwitters = getTwitters;
        this.initializeSetting = initializeSetting;

        function getTwitters(count, name) {
            if ($localStorage && $localStorage.dashboardSetting) {
                count = $localStorage.dashboardSetting.count[name];
            }
            return TwitterDashboardFactory.twitterResource(count, name).query().$promise;
        }

        function initializeSetting() {
            if ($localStorage && $localStorage.dashboardSetting) {
                return $localStorage.dashboardSetting;
            } else {
                return {
                    count: {
                        AppDirect: 0,
                        laughingsquid: 0,
                        techcrunch: 0
                    }  
                };
            }
        }
    }
})(angular);
