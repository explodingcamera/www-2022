import type { ReactNode } from 'react';
import React from 'react';
import Head from 'next/head';

// NOTE: This is part of an easteregg
import dynamic from 'next/dynamic';
const Terminal = dynamic<unknown>(
	async () =>
		import('../../components/riddle/terminal').then(mod => mod.Terminal),
	{ ssr: false },
);

const Riddle = () => (
	<>
		<Head>
			<meta name="robots" content="noindex" />
		</Head>
		<Terminal />
	</>
);

const Layout: React.FC = ({ children }: { children: ReactNode }) => (
	<div>{children}</div>
);

Riddle.Layout = Layout;
export default Riddle;
