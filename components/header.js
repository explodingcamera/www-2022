import React from 'react';
import styled from 'styled-components';
import Link from './link';

const Header = styled.nav`
	ol {
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Title = styled.li`
	margin-right: auto;
	font-size: 1rem;
`;

const Item = styled.li`
	margin-right: 0.5rem;

	&:last-of-type {
		margin-right: 0;
	}

	a {
	}
`;

export default () => (
	<Header>
		<ol>
			<Title>
				<Link href="/" animateFontColor>
					explodingcamera
				</Link>
			</Title>
			<Item>
				<Link href="/">home</Link>
			</Item>
			<Item>
				<Link href="/yay">projects</Link>
			</Item>
			<Item>
				<Link href="/yay">blog</Link>
			</Item>
		</ol>
	</Header>
);
