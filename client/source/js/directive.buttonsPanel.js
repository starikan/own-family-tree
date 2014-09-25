'use strict';

require("angular");
require("./factory.data")


function buttonsAddPersone($rootScope, data) {
    return {
        restrict: 'E',
        template: "<button>+</button>",
        replace: true,
        scope: {
            // options: "&",
        },
        link: function(scope, elem) {
            elem.on('click', function(){console.log(123321)})
        }
    }
}

function buttonsRemovePersone($rootScope, data) {
    return {
        restrict: 'E',
        template: "<button>-</button>",
        replace: true,
        scope: {
            // options: "&",
        },
        link: function(scope, elem) {

        }
    }
}

module.exports = angular
    .module('directive.buttonsPanel', ['factory.data'])
    .directive('buttonsAddPersone', [ '$rootScope', 'data', buttonsAddPersone ])
    .directive('buttonsRemovePersone', [ '$rootScope', 'data', buttonsRemovePersone ])
