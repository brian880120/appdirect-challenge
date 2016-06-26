(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .directive('appdirectDrag', AppdirectDragDirective);

    function AppdirectDragDirective() {
        return {
            scope: {},
            restrict: 'A',
            link: link
        };

        function link(scope, element) {
            var packery = new Packery(element[0], {
                itemSelector: '.grid-item',
                draggable: true
            });
            console.log(element.children());
            _.forEach(element.children(), function(child) {
                var draggabilly = new Draggabilly(child);
                packery.bindDraggabillyEvents(draggabilly);
            });
        }
    }
}());