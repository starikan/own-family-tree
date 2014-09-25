'use strict';

require('angular');
require("./factory.data")
require("./factory.config")
require("./factory.visible")
require("./directive.graph")
require("./directive.buttonsPanel")
// require("./directive.button.addPersone")


function func($scope, data, config, configFactory, visible) {
    // $scope.test = "112";
    // console.log(data)
    // console.log(config)
    // configFactory.setSource("123");
    // console.log(config)
    // console.log(visible)
}

module.exports = angular
    .module('controller.MainCtrl', ['factory.visible', 'factory.config', 'factory.data', 'directive.graph', 'directive.buttonsPanel'])
    .controller("MainCtrl", ['$scope', 'data', 'config', 'configFactory', 'visible', func]);
