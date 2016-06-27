(function (angular) {
    'use strict';

    angular.module('appDirect.commons.packery')
        .service('appDirect.commons.packery.PackeriesService', PackeriesService);

    function PackeriesService () {
        this.add = add;
        this.get = get;
        this.destroy = destroy;

        var packeries = {};

        function add (key, packery) {
            if (!packeries[key]) {
                packeries[key] = packery;
            }
        }

        function get (key) {
            return packeries[key];
        }

        function destroy (key) {
            var packery = get(key);
            if (packery) {
                packery.destroy();
            }
            delete packeries[key];
        }
    }
})(angular);