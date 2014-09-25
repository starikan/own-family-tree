'use strict';

var vis = require("vis");

require("angular");

var config = {
    source: 'dropbox',
}

function configFactory(config){

    function setSource(data){
        if (!data) return;
        config.source = data;
        return data;
    }

    return {
        setSource : setSource,
    };
}

module.exports = angular
	.module('factory.config', [])
    .value('config', config)
	.factory('configFactory', ['config', configFactory]);
