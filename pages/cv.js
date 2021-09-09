import React from 'react';
import styled from 'styled-components';
import Link from './../components/link';
import Layout from '../components/layout';

const Resume = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;

	> div:first-of-type {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;

		img {
			height: 10rem;
			width: 10rem;
			margin-right: 3rem;
		}
	}

	> div:last-of-type {
		column-count: 2;
		column-fill: auto;
		column-gap: 2.1875rem;

		> section {
			break-inside: avoid;
			page-break-inside: avoid;
			margin-bottom: 2rem;
		}

		h1 {
			text-transform: uppercase;
			color: #aeaebc;
			font-size: 1.3rem;
			font-weight: lighter;
		}

		h2 {
			font-weight: 600;
			font-size: 1.125rem;
			margin-top: 1rem;
		}

		h3 {
			color: #b8b8b8;
			font-weight: 500;
			font-size: 1.06rem;
		}

		p {
			white-space: pre-wrap;
			font-weight: 300;
			font-size: 1.06rem;
		}

		ul {
			margin: 0;
			padding: 0;
			display: flex;
			list-style: none;
			flex-wrap: wrap;

			li {
				-webkit-print-color-adjust: exact;
				background: white;
				color: black;
				padding: 0.3rem 0.4rem;
				margin: 0.5rem 0.7rem 0.5rem 0;
				font-weight: 700;
			}
		}
	}
`;

const CVComponent = () => (
	<Layout disableBackground>
		<Resume>
			<div>
				{/* <img src="/static/pb.jpeg" /> */}
				<h1># Henry Gressmann</h1>
			</div>
			<div>
				<section>
					<h1>## About Me</h1>
					<p>
						As a full-stack web developer, I solve problems and create
						solutions.
					</p>
					<p>
						I've been working on Open Source projects since about 2014​ and
						mainly work with Go, React, Docker/Kubernetes and am a huge Free
						Software and Linux advocate.
					</p>
				</section>
				<section>
					<h1>## Experience</h1>
					<h2>canX GmbH</h2>
					<h3>2018 - Present | Founder, Head of Development</h3>
					<p>> Built the Video-Transcoding Pipeline</p>
					<p>
						> Created a extensive SPA React Website with Server Side Rendering
					</p>
				</section>
				<section>
					<h1>## Education</h1>
					<h2>CODE University of Applied Science </h2>
					<h3>Bachelor of Science in Software Engineering</h3>
					<h3>2019 - 2021</h3>
					<h2>Berufliche Schulen Bebra</h2>
					<h3>Abitur</h3>
					<h3>Main Focus: Design and Media Technology</h3>
					<h3>2016 - 2019</h3>
				</section>
				<section>
					<h1>## Projects</h1>
					<h2>
						For a complete list, checkout my website at{' '}
						<Link href="https://henrygressmann.de">henrygressmann.de</Link>
					</h2>
				</section>
				<section>
					<h1>## Skills</h1>

					<h2>Javascript</h2>
					<h3>Advanced</h3>
					<ul>
						<li>ES-Next</li>
						<li>Functional Programming</li>
						<li>React</li>
						<li>React Native</li>
						<li>Styled-Components</li>
						<li>Node</li>
					</ul>

					<h2>Other</h2>
					<ul>
						<li>CSS</li>
						<li>Go</li>
						<li>Git</li>
						<li>Docker</li>
						<li>Kubernetes</li>
						<li>Linux Server</li>
						<li>UI Design</li>
					</ul>
				</section>
				<section>
					<h1>## Contact</h1>
					<h2>
						<Link href="https://henrygressmann.de">henrygressmann.de</Link>
					</h2>
					<h2>
						<Link href="https://github.com/explodingcamera">
							github.com/explodingcamera
						</Link>
					</h2>
					<h2>
						<Link href="mailto:mail@henrygressmann.de">
							mail@henrygressmann.de
						</Link>
					</h2>
					<h2>
						<Link href="https://twitter.com/explodingcamera">
							@explodingcamera
						</Link>
					</h2>
				</section>
			</div>
		</Resume>
	</Layout>
);

export default CVComponent;
