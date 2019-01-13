import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from './link';

import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaKey } from 'react-icons/fa';

const slideIn = keyframes`
	0% {transform: translateY(1.6rem);}
	100% {transform: translateY(0);}
`;

const Header = styled.nav`
	ol {
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 1.8rem;
		margin: 1rem 0 2rem 0;
		overflow: hidden;
	}
`;

const Title = styled.li`
	margin-right: auto;
	font-size: 1rem;

	@media only screen and (max-width: 30rem) {
		display: none;
	}
`;

const Item = styled.li`
	margin-right: 0.5rem;
	display: flex;

	&:last-of-type {
		margin-right: 0;
	}
`;

export default () => (
	<Header>
		<ol>
			<Title>
				<Link href="index.html" animateFontColor>
					explodingcamera
				</Link>
			</Title>
			<Item delay=".2s">
				<Link href="index.html">home</Link>
			</Item>
			<Item delay=".3s">
				<Link href="projects.html">projects</Link>
			</Item>
			<Item delay=".4s">
				<Link href="me.html">about me</Link>
			</Item>
			&nbsp;
			<Item delay=".5s">
				<Link href="https://twitter.com/explodingcamera">
					<FiTwitter />
				</Link>
			</Item>
			<Item delay=".6s">
				<Link href="https://github.com/explodingcamera">
					<FiGithub />
				</Link>
			</Item>
			<Item delay=".7s">
				<Link href="https://keybase.io/explodingcamera/pgp_keys.asc">
					<FaKey />
				</Link>
			</Item>
			<Item delay=".8s">
				<Link href="https://www.linkedin.com/in/henrygressmann/">
					<FiLinkedin />
				</Link>
			</Item>
		</ol>
	</Header>
);
