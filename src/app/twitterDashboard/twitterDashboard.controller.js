(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.TwitterDashboardController', TwitterDashboardController);

    TwitterDashboardController.$inject = [
        '$q',
        'appDirect.twitterDashboard.commons.TwitterDashboardService',
        'appDirect.twitterDashboard.commons.TwitterDashboardConstant',
    ];

    function TwitterDashboardController($q, TwitterDashboardService, TwitterDashboardConstant) {
        var vm = this;
        vm.twitterCards = [];

        initialize();

        function initialize() {
            var promises = [];

            promises.push(TwitterDashboardService.getTwitters(10, TwitterDashboardConstant.APP_DIRECT).then(function(items) {
                console.log(items);
                vm.twitterCards.push({
                    data: items
                });
            }, onError));

            promises.push(TwitterDashboardService.getTwitters(10, TwitterDashboardConstant.LAUGHING_SQUID).then(function(items) {
                vm.twitterCards.push({
                    data: items
                });
            }, onError));

            promises.push(TwitterDashboardService.getTwitters(10, TwitterDashboardConstant.TECH_CRUNCH).then(function(items) {
                vm.twitterCards.push({
                    data: items
                });
            }, onError));

            $q.all(promises).then(null, onError);

            function onError() {
                console.log('error');
            }
        }
    }
}());