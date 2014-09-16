module.exports = {
    build: {
    	folder: "build",
    	jade: {
    		source: 'client/source/jade',
    		dest: "build",
    		files: ['index.jade']
    	},
    	stylus: {
    		source: 'client/source/styl',
    		dest: "build",
    		files: ['main.styl']    		
    	},
    	js: {
    		source: 'client/source/js',
    		dest: "build",
    		files: ['main.js']    		
    	},
    },
    server: {
    	host: 'localhost',
    	port: '12345',
    },
}
