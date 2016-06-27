(function (angular) {
    'use strict';

    angular.module('appDirect.commons.packery')
        .directive('appdirectWidget', WidgetDirective);

    WidgetDirective.$inject = [
        'appDirect.commons.packery.PackeryService'
    ];

    function WidgetDirective (PackeryService) {
        return {
            restrict: 'A',
            link: link,
            scope: {
                packery: '=appdirectWidget',
                onRemove: '&?'
            }
        };

        function link (scope, element) {
            if (!_.isEmpty(scope.packery)) {
                PackeryService.add(scope.packery, element[0]);
            }

            scope.$on('$destroy', function () {
                PackeryService.remove(scope.packery, element[0]);
                (scope.onRemove || angular.noop)();
            });
        }
    }
})(angular);
