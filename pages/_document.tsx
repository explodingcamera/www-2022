import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDoc extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.bunny.net/css?family=inter:800,500,300"
						rel="stylesheet"
					/>
					<meta name="referrer" content="no-referrer" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="google" content="notranslate" />
					<meta name="referrer" content="no-referrer" />
					<meta name="format-detection" content="telephone=no" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Henry Gressmann" />
					<meta name="twitter:site" content="@explodingcamera" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
