(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .directive('twitterCard', TwitterCardDirective);

    function TwitterCardDirective() {
        return {
            scope: {
                items: '=',
                color: '@'
            },
            restrict: 'E',
            templateUrl: 'twitterDashboard/directives/twitterCard/twitterCard.template.html'
        };
    }

}());