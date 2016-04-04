'use strict';

app.directive('sidebarSearch', function () {
    return {
        templateUrl: 'scripts/directives/sidebar/search/search.html',
        restrict: 'E',
        replace: true,
        scope: {},
        controller: function ($scope) {
            $scope.selectedMenu = 'home';
        }
    }
});
