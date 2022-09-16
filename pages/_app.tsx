import React, { Suspense } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalProvider from './../components/context';
import NextNprogress from 'nextjs-progressbar';
import { initRiddle } from './../components/riddle';

import '../styles/global.css';
import dynamic from 'next/dynamic';

const Background = dynamic(async () => import('../components/background'), {
	suspense: true,
});

if (process.browser) {
	console.clear();
	console.log(
		`\n%chenrygressmann.de\n%cc3RhcnRUaGVBZHZlbnR1cmUoKQ==`,
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

const CustomApp = ({
	Component,
	pageProps,
}: AppProps<{ disableBackground: boolean }>) => (
	<>
		<Head>
			<title>henrygressmann.de</title>
		</Head>

		{!pageProps.disableBackground && (
			<Suspense fallback="">
				<Background />
			</Suspense>
		)}
		<NextNprogress />
		<GlobalProvider>
			<Component {...pageProps} />
		</GlobalProvider>
	</>
);

export default CustomApp;
