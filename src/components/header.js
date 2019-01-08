import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

const Header = styled.div``;

const HeaderComponent = ({}) => (
	<Header>
		<div>
			<h1 style={{ margin: 0 }}>
				<Link to="/">Henry Gressmann</Link>
			</h1>
		</div>
	</Header>
);

HeaderComponent.propTypes = {
	siteTitle: PropTypes.string,
};

HeaderComponent.defaultProps = {
	siteTitle: ``,
};

export default HeaderComponent;
