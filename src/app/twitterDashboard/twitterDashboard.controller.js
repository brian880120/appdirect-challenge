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

        var unSortedTwitterTypes = TwitterDashboardService.twitterTypes;

        // object for packery drag and drop options
        vm.packeryOptions = {
            columnWidth: '.appdirect-card-size',
            gutter: '.appdirect-card-gutter',
            itemSelector: '.appdirect-card',
            percentPosition: true,
            draggable: true
        };

        vm.getTwitters = getTwitters;
        vm.initializeLayout = initializeLayout;
        vm.onOrder =onOrder;
        vm.getIndex = getIndex;
        vm.reload = reload;

        initialize();

        function initialize() {
            vm.isLoading = true;
            vm.errorMessage = null;
            vm.settings = TwitterDashboardService.initializeSetting();
            vm.initializeLayout();
            vm.getTwitters();
        }

        // request twitter for each colume from service
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

        // use orders from localStorage to sort twitter types in order
        function initializeLayout() {
            vm.twitterTypes = [];
            _.forEach(vm.settings.order, function(index) {
                vm.twitterTypes.push(unSortedTwitterTypes[index]);
            });
        }

        function onOrder(order) {
            TwitterDashboardService.setOrder(order);
        }

        function getIndex(type) {
            return _.indexOf(unSortedTwitterTypes, type);
        }

        // to load data again when setting is confirmed
        function reload() {
            initialize();
        }
    }
}());