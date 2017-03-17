/**
 * Created by lelabo on 10/03/17.
 */
var popup_app = angular.module('popup_app', ['ngMaterial', 'ngAnimate', 'ngAria']);

popup_app.run(function() {
});

popup_app.controller('BookmarkSettingsController', function ($scope, global, BookmarkService, BookmarkQuery) {
    $scope.tab = {};
    $scope.selected = '';
    $scope.directories = [global.interests_dir, global.read_later_dir];

    $scope.done = function () {

    };

    $scope.alertme = function () {
        console.log($scope.selected);
    };

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        $scope.tab.name = tabs[0].title;
        $scope.tab.url = tabs[0].url;
        BookmarkService.get_or_create(new BookmarkQuery(null, null, $scope.tab.name, $scope.tab.url))
            .then(function (results) {
                $scope.bookmark = results[0];
                console.log($scope.bookmark);
            });
        $scope.$apply();
    });
});
