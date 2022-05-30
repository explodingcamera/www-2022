const withTM = require('next-transpile-modules')(['xterm-for-react']); // Pass the modules you would like to see transpiled

const config = {
	webpack(config) {
		// Add Raw-Loader
		config.module.rules.push({
			test: /\.css$|\.svg$/,
			use: 'raw-loader',
		});

		return config;
	},
	poweredByHeader: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = withTM(config);
