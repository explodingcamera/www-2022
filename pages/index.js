import React from 'react';
import styled from 'styled-components';

const Home = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HomeComponent = props => (
	<Home>
		<h1>henrygressmann.de</h1>
	</Home>
);

export default HomeComponent;
