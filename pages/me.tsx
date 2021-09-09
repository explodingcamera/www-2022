import React from 'react';
import styled, { keyframes } from 'styled-components';

import Link from './../components/link';
import Layout from '../components/layout';

const gradient = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`;

const Me = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 3em;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
		background-size: 600% 600%;
		animation: ${gradient} 10s ease infinite;
	}

	p {
		font-size: 1.4rem;
		line-height: 1.5;
		max-width: 40rem;
		a {
			white-space: pre;
		}
	}
`;

const MeComponent = () => (
	<Layout>
		<Me>
			<h1>about me</h1>
			<p>
				I've been working on Open Source projects since about 2014 and mainly
				work with{' '}
				<Link href="https://github.com/explodingcamera/snowstorm">
					Typescript
				</Link>
				,{' '}
				<Link href="https://github.com/fantasymarket/fantasymarket-api">
					Go
				</Link>
				,{' '}
				<Link href="https://github.com/explodingcamera/snowstorm">
					React, React Native
				</Link>
				, <Link href="https://kubernetes.io">Docker/Kubernetes</Link> and Rust
				but I'm open for any challange.
				<br />
				My expertise also include Security, Cryptography and{' '}
				<Link href="https://pog.network">Crypto Currencies/Blockchain</Link>
				<br />
				<br />
				I offer development support with pretty much any stack, including basic
				ui designs and consulting for software architectures,
				react/react-native, open source software and crypto currency
				development.
				<br />
				<br />
				If you're into that sort of thing, you can also check out my{' '}
				<Link href="/static/CV.pdf">CV</Link> or{' '}
				<Link href="mailto:mail@henrygressmann.de">contact me</Link> right away.
				<br />
				<br />
				By the way: This entire website is{' '}
				<Link href="https://github.com/explodingcamera/www">open-source</Link>
			</p>
		</Me>
	</Layout>
);

export default MeComponent;
