(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.TwitterDashboardController', TwitterDashboardController);

    TwitterDashboardController.$inject = [
        '$q',
        '$localStorage',
        'appDirect.twitterDashboard.commons.TwitterDashboardService',
        'appDirect.twitterDashboard.commons.TwitterDashboardConstant'
    ];

    function TwitterDashboardController($q, $localStorage, TwitterDashboardService, TwitterDashboardConstant) {
        var vm = this;
        vm.twitterCards = {};

        initialize();

        function initialize() {
            var promises = [];
            var count = 30;
            promises.push(TwitterDashboardService.getTwitters(count, TwitterDashboardConstant.APP_DIRECT).then(function(items) {
                vm.twitterCards.AppDirect = items;
            }, onError));

            promises.push(TwitterDashboardService.getTwitters(count, TwitterDashboardConstant.LAUGHING_SQUID).then(function(items) {
                vm.twitterCards.laughingsquid = items;
            }, onError));

            promises.push(TwitterDashboardService.getTwitters(count, TwitterDashboardConstant.TECH_CRUNCH).then(function(items) {
                vm.twitterCards.techcrunch = items;
            }, onError));

            $q.all(promises).then(null, onError);

            function onError() {
                console.log('error');
            }
        }

        vm.reload = reload;

        function reload() {
            initialize();
        }
    }
}());