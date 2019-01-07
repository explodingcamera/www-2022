const cfg = require('package.json');

module.exports = {
	siteMetadata: {
		title: cfg.name,
		description: cfg.description,
		author: cfg.author,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `explodingcamera.com`,
				short_name: `explodingcamera`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				// Icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
	],
};
