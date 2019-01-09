import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import modernNormalize from 'modern-normalize';

const ModernModernize = createGlobalStyle`${modernNormalize}`;
const Layout = styled.div`
	font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',
		'Bitstream Vera Sans Mono', Courier, monospace;
	display: flex;
	min-height: 100vh;
	width: 100%;
`;

export default class extends React.Component {
	static displayName = 'Layout';
	static propTypes = {
		children: PropTypes.node,
	};
	static defaultProps = {
		children: '',
	};

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<ModernModernize />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</>
		);
	}
}
