import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Background from './../components/background';
import Header from './../components/header';
import { useGlobal } from './context';

const slideIn = keyframes`
	0% {transform: translateY(1rem);opacity: 0;}
	100% {transform: translateY(0);opacity: 1;}
`;

const LayoutWrapper = styled.div`
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

	& > :not(:first-child) {
		animation-duration: 0.6s;
		animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
		animation-fill-mode: forwards;
		animation-name: ${slideIn};
	}

	> div {
		flex: 1;
	}
`;

const FallbackBG = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: ${props => props.backgroundColor || 'black'};
	z-index: -1;
	overflow: hidden;
`;

const Layout = ({ children, disableBackground, backgroundColor, ...props }) => {
	const { hasAnimated, update } = useGlobal();

	useEffect(() => {
		return () => update('hasAnimated', true);
	}, []);

	return (
		<>
			<FallbackBG backgroundColor={backgroundColor} />
			{!disableBackground && <Background />}
			<LayoutWrapper {...props}>
				<Header hasAnimated={hasAnimated} />
				{children}
			</LayoutWrapper>
		</>
	);
};

export default Layout;
