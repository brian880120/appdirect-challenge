(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .directive('settingPanel', SettingPanelDirective);

    function SettingPanelDirective() {
        return {
            scope: {
                saveSetting: '&'
            },
            restrict: 'E',
            templateUrl: 'twitterDashboard/directives/settingPanel/settingPanel.template.html',
            controller: 'appDirect.twitterDashboard.SettingPanelController as vm',
            bindToController: true
        };
    }

}());