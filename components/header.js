import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Link from './link';

import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaKey } from 'react-icons/fa';

const slideIn = keyframes`
	0% {transform: translateY(1.6rem);}
	100% {transform: translateY(0);}
`;

const Header = styled.nav`
	@media print {
		display: none;
	}

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

	transform: translateY(0);

	${props =>
		!props.hasAnimated &&
		css`
			animation-duration: 0.6s;
			animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
			animation-fill-mode: forwards;
			animation-name: ${slideIn};
			transform: translateY(1.6rem);
			animation-delay: 0s;
		`}

	@media only screen and (max-width: 30rem) {
		display: none;
	}
`;

const Item = styled.li`
	margin-right: 0.5rem;
	display: flex;
	transform: translateY(0);

	${props =>
		!props.hasAnimated &&
		css`
			animation-duration: 0.6s;
			animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
			animation-fill-mode: forwards;
			animation-name: ${slideIn};
			transform: translateY(1.6rem);
			animation-delay: ${props => props.delay};
		`}

	&:last-of-type {
		margin-right: 0;
	}
`;

export default ({ hasAnimated }) => {
	console.log(hasAnimated);
	return (
		<Header>
			<ol>
				<Title hasAnimated={hasAnimated}>
					<Link prefetch href="/" animateFontColor>
						explodingcamera
					</Link>
				</Title>
				<Item hasAnimated={hasAnimated} delay=".2s">
					<Link prefetch href="/">
						home
					</Link>
				</Item>
				<Item hasAnimated={hasAnimated} delay=".3s">
					<Link prefetch href="/projects">
						projects
					</Link>
				</Item>
				<Item hasAnimated={hasAnimated} delay=".4s">
					<Link prefetch href="/me">
						about me
					</Link>
				</Item>
				&nbsp;
				<Item hasAnimated={hasAnimated} delay=".5s">
					<Link href="https://twitter.com/explodingcamera">
						<FiTwitter />
					</Link>
				</Item>
				<Item hasAnimated={hasAnimated} delay=".6s">
					<Link href="https://github.com/explodingcamera">
						<FiGithub />
					</Link>
				</Item>
				<Item hasAnimated={hasAnimated} delay=".7s">
					<Link href="https://keybase.io/explodingcamera/pgp_keys.asc">
						<FaKey />
					</Link>
				</Item>
				<Item hasAnimated={hasAnimated} delay=".8s">
					<Link href="https://www.linkedin.com/in/henrygressmann/">
						<FiLinkedin />
					</Link>
				</Item>
			</ol>
		</Header>
	);
};
