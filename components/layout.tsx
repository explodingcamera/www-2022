import React, { ReactElement, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Background } from './../components/background';
import Header from './../components/header';
import { useGlobal } from './context';
import Link from './link';

const slideIn = keyframes`
	0% {transform: translateY(1rem);opacity: 0;}
	100% {transform: translateY(0);opacity: 1;}
`;

const LayoutWrapper = styled.div`
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
		'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	color: white;

	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	max-width: 1280px;
	padding: 2rem;
	margin: 0 auto;

	@media only screen and (max-device-width: 480px) {
		padding: 1rem;
	}

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

const FallbackBG = styled.div<{ backgroundColor?: string }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: ${props => props.backgroundColor || 'black'};
	z-index: -1;
	overflow: hidden;
`;

const Impressum = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	padding: 1rem;
`;

const Layout = ({
	children,
	disableBackground,
	backgroundColor,
	...props
}: {
	children: ReactElement;
	disableBackground?: boolean;
	backgroundColor?: string;
}) => {
	const { hasAnimated, update } = useGlobal();

	useEffect(() => () => update('hasAnimated', true), []);

	return (
		<>
			<FallbackBG backgroundColor={backgroundColor} />
			{!disableBackground && <Background />}
			<LayoutWrapper {...props}>
				<Header hasAnimated={hasAnimated} />
				<Impressum>
					<Link href="/impressum">legal notice/privacy policy</Link>
				</Impressum>
				{children}
			</LayoutWrapper>
		</>
	);
};

export default Layout;
