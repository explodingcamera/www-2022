import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();

		const originalRenderPage = ctx.renderPage;
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
			});

		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: [...initialProps.styles, ...sheet.getStyleElement()],
		};
	}

	render() {
		return (
			<html>
				<Head>
					<link
						href="/static/fonts/plex-mono/stylesheet.css"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript nonce={this.props.nonce} />
				</body>
			</html>
		);
	}
}
