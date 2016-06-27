(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.TwitterDashboardController', TwitterDashboardController);

    TwitterDashboardController.$inject = [
        '$q',
        'appDirect.twitterDashboard.commons.TwitterDashboardService'
    ];

    function TwitterDashboardController($q, TwitterDashboardService) {
        var vm = this;

        vm.twitterTypes = TwitterDashboardService.twitterTypes;
        vm.getTwitters = getTwitters;
        vm.reload = reload;

        initialize();

        function initialize() {
            vm.isLoading = true;
            vm.errorMessage = null;
            vm.settings = TwitterDashboardService.initializeSetting();
            vm.getTwitters();
        }

        function getTwitters() {
            var promises = [];
            vm.twitterCards = {};
            _.forEach(vm.twitterTypes, function(type) {
                promises.push(TwitterDashboardService.getTwitters(type).then(function(items) {
                    vm.twitterCards[type] = items;
                }, onError));
            });

            $q.all(promises).then(null, onError).finally(function() {
                vm.isLoading = false;
            });

            function onError() {
                vm.errorMessage = 'Sorry! We could not initialize data. Please try again later!';
            }
        }

        function reload() {
            initialize();
        }
    }
}());