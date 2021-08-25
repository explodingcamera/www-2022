const withTM = require('next-transpile-modules')([
	'1dca47f33f5a5cce',
	'xterm-for-react',
]); // Pass the modules you would like to see transpiled

const config = {
	webpack: config => {
		// Add Raw-Loader
		config.module.rules.push({
			test: /\.css$|\.svg$/,
			use: 'raw-loader',
		});

		return config;
	},
	poweredByHeader: false,
};

module.exports = withTM(config);
