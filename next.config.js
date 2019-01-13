const config = {
	webpack: config => {
		// Add Raw-Loader
		config.module.rules.push({
			test: /\.css$|\.svg$/,
			use: 'raw-loader',
		});

		return config;
	},
	assetPrefix: './',
	poweredByHeader: false,
};

module.exports = config;
