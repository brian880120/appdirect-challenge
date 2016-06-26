(function (angular) {
    'use strict';

    angular.module('appDirect.twitterDashboard')
        .constant('appDirect.twitterDashboard.commons.TwitterDashboardConstant', {
            BASIC_TYPES: [
                'techcrunch',
                'AppDirect',
                'laughingsquid'
            ],
            BASIC_COLORS: [
                'orange',
                'aliceblue',
                'darkgray'
            ],
            DEFAULT_SETTINGS: {
                count: {
                    AppDirect: 30,
                    laughingsquid: 30,
                    techcrunch: 30
                },
                color: 'orange',
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
            }
        });
})(angular);