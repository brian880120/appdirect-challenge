describe('twitterDashboard/twitterDashboard.controller.spec.js', function() {
    'use strict';

    var controller;
    var TwitterDashboardService;

    beforeEach(function() {
        module('appDirect.twitterDashboard');
        module('appDirect.commons');
        angular.mock.inject([
            '$q',
            '$controller',
            'appDirect.twitterDashboard.commons.TwitterDashboardService',
            function($q, $controller, _TwitterDashboardService_) {
                controller = $controller('appDirect.twitterDashboard.TwitterCardController', {
                    'appDirect.twitterDashboard.commons.TwitterDashboardService':  _TwitterDashboardService_
                });
            }
        ]);
    });

    it('test on basic method', function() {
        expect(controller).toBeDefined();
    });
});
