'use strict';

require("angular");
require("./factory.data")

function buttonsPanel() {
    return {
        restrict: 'E',
        template: "<div class='buttonsPanel'><buttons-add-persone></buttons-add-persone></div>",
        replace: true,
        // transclude: true,
    }
}

function buttonsAddPersone($window, data) {
    return {
        restrict: 'E',
        template: "<div>321</div>",
        replace: true,
        scope: {
            // options: "&",
        },
        link: function(scope, elm) {

        }
    }
}

module.exports = angular
    .module('directive.buttonsPanel', ['factory.data'])
    .directive('buttonsPanel', buttonsPanel)
    .directive('buttonsAddPersone', [ '$window', 'data', buttonsAddPersone ])
