'use strict';

var vis = require("vis");

require("angular");

function factory() {
    var visible = {};

    return {
        visible: visible,
    }
}

module.exports = angular
    .module('factory.visible', [])
    .value('visible', factory);
