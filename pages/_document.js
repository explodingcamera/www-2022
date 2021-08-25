import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class extends Document {
	static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

	render() {
		return (
			<Html>
				<Head>
					{this.props.headTags}
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
