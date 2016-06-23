(function() {
    'use strict';
    angular.module('appDirect.twitterDashboard')
        .controller('appDirect.twitterDashboard.TwitterCardController', TwitterCardController);

    function TwitterCardController() {
        var vm = this;
        vm.getCreatedTime = getCreatedTime;
        vm.getTwitterLink = getTwitterLink;

        function getCreatedTime(rawTime) {
            return moment(rawTime, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').format('YYYY MM DD HH:mm:ss');
        }

        function getTwitterLink(id) {
            return 'https://twitter.com/statuses/' + id;
        }
    }
}());