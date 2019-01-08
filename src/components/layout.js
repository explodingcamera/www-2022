import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby';

import Header from './header';

import 'modern-normalize';
import '@ibm/plex/css/ibm-plex.css';

const Wrapper = styled.div`
	font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',
		'Bitstream Vera Sans Mono', Courier, monospace;
	${'' /* font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif; */}
`;

const Layout = ({ children }) => (
	<Wrapper>
		<Header />
		<div>{children}</div>
	</Wrapper>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
