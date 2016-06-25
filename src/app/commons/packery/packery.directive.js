(function (angular) {
    'use strict';

    angular.module('appDirect.commons.packery')
        .directive('appdirectPackery', PackeryDirective);

    PackeryDirective.$inject = [
        '$timeout',
        'appDirect.commons.packery.PackeryService',
        'appDirect.commons.packery.PackeriesService'
    ];

    function PackeryDirective ($timeout, PackeryService, PackeriesService) {
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
            options.handle = options.handle || '*';
            options.draggable = options.draggable ? options.draggable : false;
            $timeout(initialize);

            function initialize () {
                var key = new Date().getTime();
                var packery = new Packery(element[0], options);

                if (options.draggable) {
                    packery.on('dragItemPositioned', function () {
                        var order = _.map(packery.items, 'element.id');
                        scope.onOrder({ $order: order });
                    });

                    _.forEach(element.children(), function (child) {
                        PackeryService.enableDraggableElement(packery, child);
                    });
                }

                PackeriesService.add(key, packery);

                scope.$emit('$packeryInitialized', {
                    key: key,
                    packery: packery
                });
                scope.$on('$destroy', function () {
                    PackeriesService.destroy(key);
                });
            }
        }
    }
})(angular);