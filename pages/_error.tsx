import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import Layout from '../components/layout';

const gradient = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`;

const Home = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 8rem;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
		background-size: 600% 600%;
		animation: ${gradient} 10s ease infinite;
	}
`;

const ErrorComponent = () => (
	<Layout>
		<Home>
			<h1>Not Found 🐶</h1>
		</Home>
	</Layout>
);

export default ErrorComponent;
