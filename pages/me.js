import React from 'react';
import styled, { keyframes } from 'styled-components';

import Link from './../components/link';

const gradient = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`;

const Me = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 3em;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
		background-size: 600% 600%;
		animation: ${gradient} 10s ease infinite;
	}

	p {
		font-size: 1.4rem;
		line-height: 1.5;
		max-width: 40rem;
		a {
			white-space: pre;
		}
	}
`;

const MeComponent = () => (
	<Me>
		<h1>about me</h1>
		<p>
			I'm currently studying Software Engineering at{' '}
			<Link href="https://code.berlin/">
				CODE University of Applied Sciences
			</Link>
			.
			<br />
			<br />
			I've been working on Open Source projects since about 2014​ and mainly
			work with <Link href="https://golang.org">Go</Link>,{' '}
			<Link href="https://reactjs.org">React</Link>,{' '}
			<Link href="https://kubernetes.io">Docker/Kubernetes</Link> and am a huge
			Free Software and Linux advocate.
			<br />
			<br />
			<Link href="https://www.discogs.com/user/_henry/collection?sort_by=artists_sort">
				Music
			</Link>{' '}
			is really important to me but I'm also very interested in Security,
			Cryptography and{' '}
			<Link href="https://www.coursera.org/account/accomplishments/verify/NWNS4QMPHWEU">
				Machine Learning.
			</Link>
			<br />
			<br />
			By the way: This entire website is{' '}
			<Link href="https://github.com/explodingcamera/www">open-source</Link>
		</p>
	</Me>
);

export default MeComponent;
