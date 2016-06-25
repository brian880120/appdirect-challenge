(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.TwitterCardController', TwitterCardController);

    TwitterCardController.$inject = [
        'appDirect.twitterDashboard.commons.TwitterDashboardService'
    ];

    function TwitterCardController(TwitterDashboardService) {
        var vm = this;
        vm.getCreatedTime = getCreatedTime;
        vm.getTwitterLink = getTwitterLink;

        function getCreatedTime(rawTime) {
            return TwitterDashboardService.parseDate(rawTime).format('YYYY MM DD HH:mm:ss');
        }

        function getTwitterLink(id) {
            return 'https://twitter.com/statuses/' + id;
        }
    }
}());