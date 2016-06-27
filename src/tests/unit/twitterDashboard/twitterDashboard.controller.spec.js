describe('twitterDashboard/twitterDashboard.controller.spec.js', function() {
    'use strict';

    var controller;
    var TwitterDashboardService;
    var deferredTweets;
    var $scope;

    beforeEach(function() {
        module('appDirect.twitterDashboard');
        module('appDirect.commons');
        angular.mock.inject([
            '$q',
            '$rootScope',
            '$controller',
            'appDirect.twitterDashboard.commons.TwitterDashboardService',
            function($q, $rootScope, $controller, _TwitterDashboardService_) {
                $scope = $rootScope.$new();
                deferredTweets = $q.defer();
                TwitterDashboardService = _TwitterDashboardService_;
                spyOn(TwitterDashboardService, 'getTwitters').and.returnValue(deferredTweets.promise);
                spyOn(TwitterDashboardService, 'initializeSetting').and.returnValue({data: 'test'});
                controller = $controller('appDirect.twitterDashboard.TwitterDashboardController', {
                    'appDirect.twitterDashboard.commons.TwitterDashboardService': TwitterDashboardService
                });
            }
        ]);
    });

    it('should be defined', function() {
        expect(controller).toBeDefined();
    });

    it('should get twitter items' ,function() {
        controller.twitterTypes = ['testType1', 'testType2', 'testType3'];
        controller.getTwitters();
        expect(TwitterDashboardService.getTwitters).toHaveBeenCalled();
        $scope.$apply(function() {
            deferredTweets.resolve({data: 'test'});
        });
        expect(controller.twitterCards['testType1']).toEqual({data: 'test'});
        expect(controller.twitterCards['testType2']).toEqual({data: 'test'});
        expect(controller.twitterCards['testType3']).toEqual({data: 'test'});
    });

    it('should not get twitter items' ,function() {
        controller.twitterTypes = ['testType1'];
        controller.getTwitters();
        expect(TwitterDashboardService.getTwitters).toHaveBeenCalled();
        $scope.$apply(function() {
            deferredTweets.reject('error');
        });
        expect(controller.errorMessage).toBe('Sorry! We could not initialize data. Please try again later!'); 
    });

    it('should call reload', function() {
        controller.reload();
        expect(controller.isLoading).toBeTruthy();
        expect(controller.errorMessage).toBeNull();
        expect(TwitterDashboardService.initializeSetting).toHaveBeenCalled();
        expect(controller.settings).toEqual({data: 'test'});
        expect(TwitterDashboardService.getTwitters).toHaveBeenCalled();
    });
});