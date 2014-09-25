'use strict';

var vis = require("vis");

require("angular");
require("./factory.data")

function directive($window, data) {
    return {
        restrict: 'E',
        template: "<div></div>",
        replace: true,
        scope: {
            options: "&",
        },
        link: function(scope, elm) {

            scope.options = {
                width: $window.innerWidth,
                height: $window.innerHeight
            };

            // Update options of Graph
            scope.$watch("options", function(curr) {
                graph.setOptions(curr);
            }, true);

            // onResize
            angular.element($window).bind('resize', function() {
                scope.options.width = $window.innerWidth;
                scope.options.height = $window.innerHeight;
                scope.$apply();
            });

            var graph = new vis.Network(elm[0], data.data, scope.options);

        }
    }
}


module.exports = angular
    .module('directive.graph', ['factory.data'])
    .directive('graph', ['$window', 'data', directive]);
