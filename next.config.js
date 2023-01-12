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
	transpilePackages: ['xterm-for-react'],
};

module.exports = withBundleAnalyzer(config);
