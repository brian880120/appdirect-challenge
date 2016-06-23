(function (angular) {
    'use strict';

    angular.module('appDirect.core.states')
        .provider('appDirect.core.states.StatesProvider', StatesProvider);

    StatesProvider.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function StatesProvider($stateProvider, $urlRouterProvider) {
        var vm = this;
        vm.$get = State;

        State.$inject = ['$state'];

        function State ($state) {
            var service = {
                configureStates: configureStates,
                getStates: getStates
            };

            $urlRouterProvider.otherwise('/dashboard');

            function configureStates (states) {
                states.forEach(function (state) {
                    $stateProvider.state(state.state, state.config);
                });
            }

            function getStates () {
                return $state.get();
            }

            return service;
        }
    }
})(angular);
