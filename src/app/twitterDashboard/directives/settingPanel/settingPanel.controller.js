(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.SettingPanelController', SettingPanelController);

    SettingPanelController.$inject = [
        '$localStorage',
        'appDirect.twitterDashboard.commons.TwitterDashboardConstant'
    ];

    function SettingPanelController($localStorage, TwitterDashboardConstant) {
        var vm = this;

        vm.colors = TwitterDashboardConstant.BASIC_COLORS;

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
            vm.settingBackup = angular.copy(vm.settings);
            vm.isShow = true;
        }

        function confirmSetting() {
            $localStorage.dashboardSetting = vm.settings;
            vm.saveSetting();
            vm.isShow = false;
        }

        function cancelSetting() {
            vm.settings = vm.settingBackup;
            vm.isShow = false;
        }
    }
}());