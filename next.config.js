const withTM = require('next-transpile-modules')(['xterm-for-react']); // Pass the modules you would like to see transpiled
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
	openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const config = {
	poweredByHeader: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
	compiler: {
		emotion: true,
	},
	productionBrowserSourceMaps: true,
};

module.exports = withTM(withBundleAnalyzer(config));
