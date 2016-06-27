describe('twitterDashboard/twitterDashboard.controller.spec.js', function() {
    'use strict';

    var controller;

    beforeEach(module('appDirect.twitterDashboard'));

    describe('test on basic method', function() {
        beforeEach(inject(function($q, $controller) {
            controller = $controller;
        }));

        it('should be defined', function () {
            console.log(controller);
            expect(controller).toBeDefined();
        });

    });
});
