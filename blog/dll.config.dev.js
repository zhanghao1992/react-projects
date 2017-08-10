const webpack = require('webpack');

const vendors = [
	'react',
	'redux',
	'react-dom',
	'react-redux',
	'redux-thunk',
	'react-router',
	'react-router-redux'
];

module.exports = {
	output: {
		path: __dirname + '/public/script',
		filename: '[name].js',
		library: '[name]'
	},
	entry: {
		lib: vendors
	},
	plugins: [
		new webpack.DllPlugin({
			path: 'manifest.json',
			name: '[name]',
			context: __dirname
		})
	]
}