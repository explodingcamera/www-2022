import React from 'react';
import styled, { keyframes } from 'styled-components';

import Link from './../components/link';
import Layout from '../components/layout';

const gradient = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`;

const Impressum = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 3em;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
		background-size: 600% 600%;
		animation: ${gradient} 10s ease infinite;
	}

	p {
		font-size: 1.4rem;
		line-height: 1.5;
		max-width: 40rem;
		white-space: pre-wrap;
		a {
			white-space: pre;
		}
	}
`;

const ImpressumComponent = () => (
	<Layout>
		<Impressum>
			<h1>imprint</h1>
			<p>
				Angaben gemäß § 5 TMG & Vertreten durch:
				<br />
				Henry Gressmann
				<br />
				{/* uncomment after gewerbeanmeldung */}
				{/* c/o Factory Works GmbH
				<br />
				Lohmühlenstraße 65
				<br />
				12435 Berlin
				<br />
				Germany */}
				<br />
				<Link href="mailto:mail@henrygressmann.de">mail@henrygressmann.de</Link>
				<br />
				Tel: 030-98442918
			</p>
		</Impressum>
	</Layout>
);

export default ImpressumComponent;
