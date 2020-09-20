import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="/static/fonts/roboto-mono/roboto-mono.css"
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
				</Head>
				<body>
					<Main />
					<NextScript nonce={this.props.nonce} />
				</body>
			</Html>
		);
	}
}
