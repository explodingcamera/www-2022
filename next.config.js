const withTM = require('next-transpile-modules')(['xterm-for-react']); // Pass the modules you would like to see transpiled

/** @type {import('next').NextConfig} */
const config = {
	poweredByHeader: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
};

module.exports = withTM(config);
