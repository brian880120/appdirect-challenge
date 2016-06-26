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
        vm.twitterTypes = TwitterDashboardService.getTwitterTypes();

        initialize();

        function initialize() {
            var promises = [];
            vm.twitterCards = {};
            vm.settings = TwitterDashboardService.initializeSetting();
            _.forEach(vm.twitterTypes, function(type) {
                promises.push(TwitterDashboardService.getTwitters(TwitterDashboardConstant.DEFAULT_COUNT, type).then(function(items) {
                    if (vm.settings.datePreferrence) {
                        var parsedItems = [];
                        _.forEach(items, function(item) {
                            var startDate = vm.settings.date.startDate.value;
                            var endDate = vm.settings.date.endDate.value;
                            var itemDate = TwitterDashboardService.parseDate(item.created_at);
                            if (itemDate.isSameOrAfter(startDate) && itemDate.isSameOrBefore(endDate)) {
                                parsedItems.push(item);
                            }
                        });
                        vm.twitterCards[type] = parsedItems;
                    } else {
                        vm.twitterCards[type] = items;
                    }
                }, onError));
            });

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