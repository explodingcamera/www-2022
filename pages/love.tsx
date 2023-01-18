import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Link from '../components/link';

const gradient = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`;

const Love = styled.div`
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

	h2 {
		font-size: 1.9em;
		font-weight: 400;
		margin-top: 1.5rem;
		margin-bottom: 0.6rem;
	}

	p {
		font-size: 1.4rem;
		line-height: 1.5;
		max-width: 90rem;
		a {
			white-space: pre;
		}
	}

	ul {
		margin: 0;
		font-size: 1.4rem;
		line-height: 1.5;
		max-width: 45rem;
	}
`;

export default function Page() {
	return (
		<Layout>
			<Love>
				<h1>Things I love</h1>
				<p>
					Some random things I love in no particular order and without any
					context that just make me happy. Inspired by{' '}
					<Link href="https://sriramk.com/love.html">this</Link>.
				</p>
				<ul>
					<li>
						<Link href="https://custodians.online/">
							Open access to knowledge
						</Link>
					</li>
					<li>
						<Link href="https://www.goodreads.com/series/189931-remembrance-of-earth-s-past">
							The Remembrance of Earth's Past Trilogy by Cixin Liu
						</Link>
					</li>
					<li>The Kill Bill movies</li>
					<li>
						<Link href="https://github.com/baskerville/bspwm">
							bspwm (tiling window manager)
						</Link>
					</li>
					<li>Updating project dependencies</li>
					<li>
						<Link href="https://www.youtube.com/watch?v=GoLJJRIWCLU">
							Jigsaw Falling Into Place by Radiohead
						</Link>
					</li>
					<li>Single word domain names</li>
					<li>The Futura font</li>
					<li>
						<Link href="https://dontasktoask.com/">
							Don't ask to ask, just ask
						</Link>{' '}
						and{' '}
						<Link href="https://nohello.net/en/">
							Don't say hello, just start talking
						</Link>
					</li>
					<br />
				</ul>
				<ul>
					<li>LEDs, especially the WS2812B</li>
					<li>Microcontrollers from Espressif</li>
					<li>The Casio GW-M5610U</li>
					<li>My Sigma 30mm f/1.4 Lense</li>
					<li>A good negroni with a twist of orange</li>
					<li>The Shure SM7B</li>
					<li>
						<Link href="https://www.discogs.com/de/user/_henry/collection">
							Records
						</Link>
					</li>
					<li>Infinity Mirrors</li>
				</ul>
			</Love>
		</Layout>
	);
}
