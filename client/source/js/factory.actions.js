'use strict';

require("angular");

function factory() {

    actions = {
        'add': {
            'broad': function(){

            },
            'on': function(){

            },
        }
    }

    return {
        actions: actions,
    }
}

module.exports = angular
    .module('factory.actions', [])
    .factory('actions', factory);
