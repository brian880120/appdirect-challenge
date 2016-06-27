(function (angular) {
    'use strict';

    angular.module('appDirect.commons', [
        'ngResource',
        'ngStorage',
        'angularSpinner',
        'ui.bootstrap.datetimepicker',
        'appDirect.commons.templates',
        'appDirect.commons.packery'
    ]);
})(angular);