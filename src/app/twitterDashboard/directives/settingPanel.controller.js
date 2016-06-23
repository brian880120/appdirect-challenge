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
        vm.enableSetting = enableSetting;
        vm.confirmSetting = confirmSetting;
        vm.cancelSetting = cancelSetting;

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

    }
}());