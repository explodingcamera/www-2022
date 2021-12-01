import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalProvider from './../components/context';
import NextNprogress from 'nextjs-progressbar';
import { initRiddle } from './../components/riddle';
import { modernNormalize } from '../components/normalize';

if (process.browser) {
	console.clear();
	console.log(
		`\n%chenrygressmann.com\n%cc3RhcnRUaGVBZHZlbnR1cmUoKQ==`,
		`
		background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);
		background-size: cover;
    color: #fff;
    width: 100%;
    font-family: 'Roboto Mono','Menlo','DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace;
    font-size: 3rem;
    padding: 0 3rem;
    line-height: 6.85rem`,
		`background: none;
  font-size: 3px;`,
	);

	initRiddle();
}

const GlobalCSS = createGlobalStyle`
	html {
		background: black;
	}
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

export default function customApp({ Component, pageProps }: AppProps) {
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
