(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .directive('settingPanel', SettingPanelDirective);

    function SettingPanelDirective() {
        return {
            scope: {
                initialIsShow: '@isShow'
            },
            restrict: 'E',
            templateUrl: 'twitterDashboard/directives/settingPanel.template.html',
            controller: 'appDirect.twitterDashboard.SettingPanelController as vm',
            bindToController: true
        };
    }

}());