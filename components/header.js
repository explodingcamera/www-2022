import React from 'react';
import styled from 'styled-components';
import Link from './link';

import { FiTwitter, FiGithub } from 'react-icons/fi';
import { FaKey } from 'react-icons/fa';

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
	display: flex;

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
				<Link href="/projects">projects</Link>
			</Item>
			<Item>
				<Link href="/yay">blog</Link>
			</Item>
			&nbsp;
			<Item>
				<Link href="https://twitter.com/explodingcamera">
					<FiTwitter />
				</Link>
			</Item>
			<Item>
				<Link href="https://github.com/explodingcamera">
					<FiGithub />
				</Link>
			</Item>
			<Item>
				<Link href="https://keybase.io/explodingcamera/pgp_keys.asc">
					<FaKey />
				</Link>
			</Item>
		</ol>
	</Header>
);
