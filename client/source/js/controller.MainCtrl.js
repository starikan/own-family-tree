'use strict';

require('angular');
require('bootstrap');
require('ngDialog');
require("./factory.data")
require("./factory.config")
require("./factory.visible")
require("./directive.graph")
require("./directive.buttonsPanel")
require("./directive.forms")


function func($scope, actions, data, config, configFactory, visible) {
    // $scope.test = "112";
    // console.log(data)
    // console.log(config)
    // configFactory.setSource("123");
    // console.log(config)
    // console.log(visible)
}

module.exports = angular
    .module('controller.MainCtrl', ['ngDialog', 'factory.visible', 'factory.config', 'factory.data', 'directive.graph', 'directive.buttonsPanel', 'directive.forms'])
    .controller("MainCtrl", ['$scope', 'data', 'config', 'configFactory', 'visible', func]);
