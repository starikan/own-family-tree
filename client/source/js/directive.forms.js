'use strict';

require("angular");
require("./factory.data")


function formAddPersone(data) {
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



module.exports = angular
    .module('directive.forms', ['factory.data'])
    .directive('formAddPersone', [ 'data', formAddPersone ])
