(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.TwitterDashboardController', TwitterDashboardController);

    TwitterDashboardController.$inject = [
        '$q',
        '$scope',
        'appDirect.twitterDashboard.commons.TwitterDashboardService'
    ];

    function TwitterDashboardController($q, $scope, TwitterDashboardService) {
        var vm = this;

        vm.order = TwitterDashboardService.getOrder();
        vm.unSortedTwitterTypes = TwitterDashboardService.twitterTypes;
        vm.twitterTypes = [];
        _.forEach(vm.order, function(index) {
            vm.twitterTypes.push(vm.unSortedTwitterTypes[index]);
        });
        vm.getTwitters = getTwitters;
        vm.reload = reload;

        vm.packeryOptions = {
            columnWidth: '.appdirect-card-size',
            gutter: '.appdirect-card-gutter',
            itemSelector: '.appdirect-card',
            percentPosition: true,
            draggable: true
        };

        vm.packery = {};
        vm.onOrder =onOrder;
        vm.getIndex = getIndex;

        function onOrder(order) {
            $scope.$apply(function () {
                vm.order = order;
                TwitterDashboardService.setOrder(order);
            });
        }

        function getIndex(type) {
            return _.indexOf(vm.unSortedTwitterTypes, type);
        }

        initialize();

        function initialize() {
            vm.isLoading = true;
            vm.errorMessage = null;
            vm.settings = TwitterDashboardService.initializeSetting();
            vm.getTwitters();

            $scope.$on('$packeryInitialized', function (event, data) {
                vm.packery = data.packery;
            });
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