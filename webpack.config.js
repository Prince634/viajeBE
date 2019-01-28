module.exports = {
	entry :[
		'./src/index.js'
	],
	output: {
		filename: './bundle.js'
	},
	module:{
		rules: [{
			exclude:'/node_modules/',
			loader:'babel-loader'
		}]
	}
};