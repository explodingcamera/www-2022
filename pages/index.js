import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from './../components/link';

const gradient = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`;

const Home = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 8rem;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
		background-size: 600% 600%;
		animation: ${gradient} 10s ease infinite;
	}
	h2 {
		font-size: 3rem;
		margin: 1rem 0;
		font-weight: 400;

		span,
		a {
			font-weight: 700;
		}

		span {
			font-weight: 800;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-image: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
			background-size: 600% 600%;
			animation: ${gradient} 10s ease infinite;
		}

		&:last-of-type {
			a {
				font-weight: 400;
			}
		}
	}

	@media only screen and (max-width: 60rem) {
		h1 {
			font-size: 15vw;
		}
		h2 {
			font-size: 5vw;
		}
		img {
			height: 7vw;
		}
	}
`;

const HomeComponent = () => (
	<Home>
		<h1>HI!</h1>
		<h2>
			I'm <span>Henry</span> and I do a lot of fun{' '}
			<Link href="/projects">projects</Link>
		</h2>
		<h2>
			Contact me at{' '}
			<Link href="mailto:mail@henrygressmann.de">mail@henrygressmann.de</Link>
		</h2>
		<h2>
			Currently, I'm creating{' '}
			<Link href="https://canx.org">
				can<span>X</span>
			</Link>
		</h2>
	</Home>
);

export default HomeComponent;
