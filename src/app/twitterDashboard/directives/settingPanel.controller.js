(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.SettingPanelController', SettingPanelController);

    function SettingPanelController() {
        var vm = this;
        vm.isShow = (vm.initialIsShow === 'true');
        vm.count = 0;
    }
}());