(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .directive('twitterCard', TwitterCardDirective);

    function TwitterCardDirective() {
        return {
            scope: {
                items: '='
            },
            restrict: 'E',
            templateUrl: 'twitterDashboard/directives/twitterCard/twitterCard.template.html',
            controller: 'appDirect.twitterDashboard.TwitterCardController as vm',
            bindToController: true
        };
    }

}());