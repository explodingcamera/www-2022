import React from 'react';
import { createGlobalStyle } from 'styled-components';
import App from 'next/app';
import Head from 'next/head';

import modernNormalize from 'modern-normalize';
import GlobalProvider from './../components/context';

import NextNprogress from 'nextjs-progressbar';

const GlobalCSS = createGlobalStyle`
	${modernNormalize}

	#nprogress .bar {
		background: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
	}

	@media print {
		body {
			filter: invert(1);
			background: black;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}
	body {
		position: absolute;
    width: 100vw;
    overflow-x: hidden;
	}
`;

export default class extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>henrygressmann.de</title>
				</Head>
				<GlobalCSS />
				<NextNprogress />
				<GlobalProvider>
					<Component {...pageProps} />
				</GlobalProvider>
			</>
		);
	}
}
