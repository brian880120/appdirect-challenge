(function(angular) {
    'use strict';

    angular.module('appDirect.twitterDashboard')
        .service('appDirect.twitterDashboard.commons.TwitterDashboardService', TwitterDashboardService);

    TwitterDashboardService.$inject = [
        '$localStorage',
        'appDirect.twitterDashboard.commons.TwitterDashboardConstant',
        'appDirect.twitterDashboard.commons.TwitterDashboardFactory'
    ];

    function TwitterDashboardService ($localStorage, TwitterDashboardConstant, TwitterDashboardFactory) {
        this.getTwitters = getTwitters;
        this.initializeSetting = initializeSetting;
        this.twitterTypes = TwitterDashboardConstant.BASIC_TYPES;
        this.getTwitterTypes = getTwitterTypes;
        this.parseDate = parseDate;
        this.clean = clean;

        function clean() {
            console.log('test');
            delete $localStorage.dashboardSetting;
        }

        function getTwitterTypes() {
            return this.twitterTypes;
        }

        function getTwitters(count, name) {
            if ($localStorage && $localStorage.dashboardSetting) {
                count = $localStorage.dashboardSetting.count[name];
            }
            return TwitterDashboardFactory.twitterResource(count, name).query().$promise;
        }

        function parseDate(rawTime) {
            return moment(rawTime, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en');
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
                    },
                    datePreferrence: false,
                    date: {
                        startDate: {
                            title: 'Start Date',
                            value: moment()
                        },
                        endDate: {
                            title: 'End Date',
                            value: moment()
                        }
                    }
                };
            }
        }
    }
})(angular);
