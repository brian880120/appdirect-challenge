(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.SettingPanelController', SettingPanelController);

    SettingPanelController.$inject = [
        '$localStorage',
        'appDirect.twitterDashboard.commons.TwitterDashboardService'
    ];

    function SettingPanelController($localStorage, TwitterDashboardService) {
        var vm = this;

        vm.settings = TwitterDashboardService.initializeSetting();
        vm.types = _.keys(vm.settings.count);
        vm.dates = _.keys(vm.settings.date);

        _.forEach(_.keys(vm.settings.date), function(date) {
            vm.settings.date[date].value = moment(vm.settings.date[date].value);
        });

        vm.toggleDatePreferrence = toggleDatePreferrence;
        vm.enableSetting = enableSetting;
        vm.confirmSetting = confirmSetting;
        vm.cancelSetting = cancelSetting;

        function toggleDatePreferrence() {
            vm.settings.datePreferrence = !vm.settings.datePreferrence;
        }

        function enableSetting() {
            vm.isShow = true;
        }

        function confirmSetting() {
            $localStorage.dashboardSetting = vm.settings;
            vm.saveSetting();
            vm.isShow = false;
        }

        function cancelSetting() {
            vm.isShow = false;
        }

        vm.clean = function() {
            TwitterDashboardService.clean();
        };
    }
}());