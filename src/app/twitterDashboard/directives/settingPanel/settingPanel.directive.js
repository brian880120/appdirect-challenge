(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .directive('settingPanel', SettingPanelDirective);

    function SettingPanelDirective() {
        return {
            scope: {
                settings: '=',
                saveSetting: '&'
            },
            restrict: 'E',
            templateUrl: 'twitterDashboard/directives/settingPanel/settingPanel.template.html',
            controller: 'appDirect.twitterDashboard.SettingPanelController as vm',
            bindToController: true
        };
    }

}());