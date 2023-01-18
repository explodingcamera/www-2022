import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
		max-width: 38rem;
		a {
			white-space: pre;
		}

		> span {
			color: white;
			padding: 0.1rem 0.4rem;
			border-radius: 4px;
			margin: 0.1rem 0.2rem;
			backdrop-filter: blur(1px);
			box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 35%);
			white-space: nowrap;

			&:nth-of-type(1) {
				background-image: linear-gradient(270deg, #0b7261c1, #23d1b4c1);
			}

			&:nth-of-type(2) {
				background-image: linear-gradient(270deg, #3179c6c1, #3179c6c1);
			}

			&:nth-of-type(3) {
				background-image: linear-gradient(270deg, #61dafbc1, #45b4d3c1);
			}

			&:nth-of-type(4) {
				background-image: linear-gradient(270deg, #002c66, #072957);
			}
		}
	}
`;

const MeComponent = () => (
	<Layout>
		<Me>
			<h1>about me</h1>
			<p>
				I've been creating production-ready software for more than six years.
				I'm currently working on creating developer tooling, application
				security, and react/react-native apps.
				<br />
				<br />
				The core technologies I currently work with are <span>Rust</span>,{' '}
				<span>TypeScript</span>, <span>React/React Native</span>, and{' '}
				<span>Docker</span>.
				<br />
				<br />
				While you are here, you can also check out my{' '}
				<Link target="_blank" href="/static/cv-henry-gressmann.pdf">
					CV
				</Link>
				, <Link href="/love">things I love</Link>, ,{' '}
				<Link href="mailto:mail@henrygressmann.de">contact me</Link> or{' '}
				<Link href="/meet">schedule a meeting</Link> right away.
				{/* <br />
				<br />
				By the way: This entire website is{' '}
				<Link href="https://github.com/explodingcamera/www">
					open-source
				</Link>{' '} */}
				{/* and reaches a perfect score in Lighthouse - even with the GPU-rendered
				animated background. */}
			</p>
		</Me>
	</Layout>
);

export default MeComponent;
