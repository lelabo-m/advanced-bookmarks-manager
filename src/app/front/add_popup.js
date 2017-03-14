/**
 * Created by lelabo on 10/03/17.
 */
var popup_app = angular.module('popup_app', ['ngMaterial', 'ngAnimate', 'ngAria']);

popup_app.run(function() {
    console.log("Plop");
});

popup_app.controller('BookmarkSettingsController', function ($scope) {
    $scope.tab = {};

    chrome.tabs.getSelected(null,function(tab) { // null defaults to current window
        $scope.tab.name = tab.title;
        $scope.$apply();
    });
});
