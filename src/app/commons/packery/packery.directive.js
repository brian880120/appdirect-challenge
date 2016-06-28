(function (angular) {
    'use strict';

    angular.module('appDirect.commons.packery')
        .directive('appdirectPackery', PackeryDirective);

    PackeryDirective.$inject = [
        '$timeout',
        'appDirect.commons.packery.PackeryService'
    ];

    function PackeryDirective ($timeout, PackeryService) {
        return {
            restrict: 'A',
            scope: {
                options: '=?appdirectPackery',
                onOrder: '&?'
            },
            link: link
        };

        function link (scope, element) {
            var options = scope.options || {};
            options.draggable = options.draggable ? options.draggable : false;
            $timeout(initialize);

            function initialize () {
                var packery = new Packery(element[0], options);

                if (options.draggable) {
                    packery.on('dragItemPositioned', function () {
                        var order = _.map(packery.items, 'element.id');
                        scope.onOrder({ $order: order });
                        PackeryService.refresh(packery);
                    });

                    _.forEach(element.children(), function (child) {
                        PackeryService.enableDraggableElement(packery, child);
                    });
                }
            }
        }
    }
})(angular);