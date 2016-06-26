(function (angular) {
    'use strict';

    angular.module('appDirect.twitterDashboard')
        .constant('appDirect.twitterDashboard.commons.TwitterDashboardConstant', {
            BASIC_TYPES: [
                'AppDirect',
                'laughingsquid',
                'techcrunch'
            ],
            BASIC_COLORS: [
                'orange',
                'aliceblue',
                'darkgray'
            ],
            DEFAULT_COUNT: 30
        });
})(angular);