const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Punto Chic by angy',
		titleTemplate: '%s · PuntoChic',
		description:
			'Lo mejor para tu cabello',
		siteUrl: 'https://puntochic.com.mx',
		image: 'assets/img/mexico_museos.jpeg',
		twitterUsername: '@jaguilarh & @ElZombieIsra',
	},
	plugins: [
		'gatsby-plugin-typescript',
		'gatsby-plugin-tslint',
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				postCssPlugins: [
					require('tailwindcss'),
					require('./tailwind.config'),
				],
			},
		},
		'gatsby-image',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: path.join(__dirname, 'assets', 'img'),
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'static/favicon.png',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: -20,
			},
		},
	],
};
