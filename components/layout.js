import React, { useEffect } from 'react';
import styled from 'styled-components';
import Background from './../components/background';
import Header from './../components/header';
import { useGlobal } from './context';

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
	background: black;
	z-index: -1;
	overflow: hidden;
`;

const Layout = ({ children, disableBackground, ...props }) => {
	const { hasAnimated, update } = useGlobal();

	useEffect(() => {
		return () => update('hasAnimated', true);
	}, []);

	return (
		<>
			<FallbackBG />
			{!disableBackground && <Background />}
			<LayoutWrapper {...props}>
				<Header hasAnimated={hasAnimated} />
				{children}
			</LayoutWrapper>
		</>
	);
};

export default Layout;
