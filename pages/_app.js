import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import App, { Container } from 'next/app';

import modernNormalize from 'modern-normalize';

import Background from './../components/background';
import Header from './../components/header';

const GlobalCSS = createGlobalStyle`
	${modernNormalize}
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

const Layout = styled.div`
	font-family: 'Roboto Mono', 'Menlo', 'DejaVu Sans Mono',
		'Bitstream Vera Sans Mono', Courier, monospace;
	color: white;

	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	max-width: 1280px;
	padding: 2rem 3rem;
	margin: 0 auto;

	> div {
		flex: 1;
	}
`;

export default class extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<GlobalCSS />
				<Background />
				<Layout>
					<Header />
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}
