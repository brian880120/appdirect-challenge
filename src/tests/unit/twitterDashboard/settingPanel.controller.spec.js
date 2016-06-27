describe('twitterDashboard/settingPanel.controller.spec.js', function() {
    'use strict';

    var controller;
    var TwitterDashboardConstant
    var $scope;
    var $localStorage;

    beforeEach(function() {
        module('appDirect.twitterDashboard');
        module('appDirect.commons');

        angular.mock.inject([
            '$localStorage',
            '$controller',
            'appDirect.twitterDashboard.commons.TwitterDashboardConstant',
            function(_$localStorage_, $controller, _TwitterDashboardConstant_) {
                $localStorage = _$localStorage_;
                TwitterDashboardConstant = _TwitterDashboardConstant_;
                controller = $controller('appDirect.twitterDashboard.SettingPanelController', {
                    'appDirect.twitterDashboard.commons.TwitterDashboardConstant': TwitterDashboardConstant
                }, {
                    settings: {
                        count: {
                            type1: 0
                        },
                        datePreferrence: false,
                        date: {
                            date1: {
                                title: 'date1',
                                value: new Date()
                            }
                        }
                    },
                    saveSetting: function() {}
                });
            }
        ]);
    });

    it('should be defined', function() {
        expect(controller).toBeDefined();
    });

    it('should toggle date preferrence', function() {
        expect(controller.settings.datePreferrence).toBeFalsy();
        controller.toggleDatePreferrence();
        expect(controller.settings.datePreferrence).toBeTruthy();
    });

    it('should save settings', function() {
        controller.confirmSetting();
        expect($localStorage.dashboardSetting).toEqual(controller.settings);
        expect(controller.isShow).toBeFalsy();
    });

    it('should leave setting status', function() {
        controller.cancelSetting();
        expect(controller.settings).toEqual(controller.settingBackup);
        expect(controller.isShow).toBeFalsy();
    });
});