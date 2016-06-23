(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .run(ModuleRun);

    ModuleRun.$inject = [
        'appDirect.core.states.StatesProvider',
        'appDirect.core.states.StatesConstant'
    ];
    function ModuleRun(StatesProvider, StatesConstant) {
        var states = [
            {
                state: StatesConstant.DASHBOARD,
                config: {
                    url: '/dashboard',
                    templateUrl: 'twitterDashboard/twitterDashboard.template.html',
                    controller: 'appDirect.twitterDashboard.TwitterDashboardController as vm' 
                }
            }
        ];
        StatesProvider.configureStates(states);
    }
}());