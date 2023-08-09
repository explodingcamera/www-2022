import React from 'react';
import styled from '@emotion/styled';
import Link from './link';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaKey } from 'react-icons/fa';

import { css, keyframes } from '@emotion/react';

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

	.home {
		display: none;
	}

	@media only screen and (max-device-width: 400px) {
		.home {
			display: block;
		}
	}
`;

const Title = styled.li<{ hasAnimated: boolean }>`
	margin-right: auto;
	font-size: 1rem;

	transform: translateY(0);
	@media only screen and (max-device-width: 400px) {
		display: none;
	}

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
`;

const Item = styled.li<{ hasAnimated: boolean; delay?: string }>`
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
			animation-delay: ${props.delay};
		`}

	&:last-of-type {
		margin-right: 0;
	}
`;

const HeaderComponent = ({ hasAnimated }) => (
	<Header>
		<ol>
			<Title hasAnimated={hasAnimated}>
				<Link href="/" animateFontColor>
					Henry Gressmann
				</Link>
			</Title>
			<Item className="home" hasAnimated={hasAnimated}>
				<Link href="/" animateFontColor>
					Home
				</Link>
			</Item>
			<Item hasAnimated={hasAnimated} delay=".2s">
				<Link target="_blank" href="https://blog.henrygressmann.de">
					Blog
				</Link>
			</Item>
			<Item hasAnimated={hasAnimated} delay=".3s">
				<Link href="/work">Work</Link>
			</Item>
			<Item hasAnimated={hasAnimated} delay=".4s">
				<Link href="/me">About</Link>
			</Item>
			&nbsp;
			<Item hasAnimated={hasAnimated} delay=".6s">
				<Link aria-label="Github" href="https://github.com/explodingcamera">
					<FiGithub />
				</Link>
			</Item>
			<Item hasAnimated={hasAnimated} delay=".7s">
				<Link
					aria-label="PGP Keys"
					href="https://keybase.io/explodingcamera/pgp_keys.asc"
				>
					<FaKey />
				</Link>
			</Item>
			<Item hasAnimated={hasAnimated} delay=".8s">
				<Link
					aria-label="LinkedIn"
					href="https://www.linkedin.com/in/henrygressmann/"
				>
					<FiLinkedin />
				</Link>
			</Item>
		</ol>
	</Header>
);

export default HeaderComponent;
