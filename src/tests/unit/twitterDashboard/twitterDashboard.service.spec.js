describe('twitterDashboard/twitterDashboard.service.spec.js', function() {
    'use strict';

    var controller;
    var TwitterDashboardConstant;
    var TwitterDashboardFactory;
    var TwitterDashboardService;
    var deferred;
    var $localStorage;

    beforeEach(function() {
        module('appDirect.twitterDashboard');
        module('appDirect.commons');

        angular.mock.inject([
            '$q',
            '$localStorage',
            '$controller',
            'appDirect.twitterDashboard.commons.TwitterDashboardConstant',
            'appDirect.twitterDashboard.commons.TwitterDashboardService',
            'appDirect.twitterDashboard.commons.TwitterDashboardFactory',
            function($q, _$localStorage_, $controller, _TwitterDashboardConstant_, _TwitterDashboardService_,  _TwitterDashboardFactory_) {
                deferred = $q.defer();
                $localStorage = _$localStorage_;
                TwitterDashboardConstant = _TwitterDashboardConstant_;
                TwitterDashboardService = _TwitterDashboardService_;
                TwitterDashboardFactory = _TwitterDashboardFactory_;

                $localStorage.dashboardSetting = {
                    count: {
                        AppDirect: 30,
                        laughingsquid: 30,
                        techcrunch: 30
                    },
                    color: 'orange',
                    datePreferrence: false,
                    date: {
                        startDate: {
                            title: 'Start Date',
                            value: moment()
                        },
                        endDate: {
                            title: 'End Date',
                            value: moment()
                        }
                    }
                };
            }
        ]);
    });

    it('should get list of twitters', function() {
        var response = {
            query: function() {
                return {$promise: deferred.promise};
            }
        }
        spyOn(TwitterDashboardFactory, 'twitterResource').and.returnValue(response);
        var result = TwitterDashboardService.getTwitters();
        expect(result.$$state.status).toBe(deferred.promise.$$state.status);
        expect(TwitterDashboardFactory.twitterResource).toHaveBeenCalled();
    });
});