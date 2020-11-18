import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/layout';

const gradient = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`;

const Home = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 4rem;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
		background-size: 600% 600%;
		animation: ${gradient} 10s ease infinite;
	}

	p {
		text-indent: -1em;
		font-size: 2rem;
	}

	> div {
		transform: translateY(1rem);
		opacity: 0;

		&.animate {
			transform: translateY(0);
			opacity: 1;
			transition: all 0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
		}
	}
`;

var GITHUB_ISSUES_LINK =
	'https://api.github.com/repos/explodingcamera/www-linkshortener/issues/';
var PATH_SEGMENTS_TO_SKIP = 0;

function isUrl(url) {
	// Regex from https://stackoverflow.com/a/3809435, with a modification to allow for TLDs of up to 24 characters
	return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,24}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(
		url,
	);
}

async function redirect() {
	const location = window.location;
	const issueNumber = location.pathname.split('/')[PATH_SEGMENTS_TO_SKIP + 1];

	const response = await fetch(GITHUB_ISSUES_LINK + issueNumber);

	if (response.status !== 200)
		throw new Error(
			"An error occurred with the GitHub API. Maybe you've exceeded your API limits (60 per hour)",
		);

	const payload = await response.json();
	const message = payload.message;
	const title = payload.title;

	if (message !== 'Not Found' && title && isUrl(title)) {
		// Check if the title of issue is a legitimate URL
		const url = new URL(title);
		if (
			(url.protocol !== 'https:' && url.protocol !== 'http:') ||
			url.host === location.host
		) {
			// Prevent recursive redirects and XSS
			throw new Error('URL to redirect to is invalid!');
		} else {
			location.replace(title);
		}
	} else {
		throw new Error('issueNumber does not exist in gh issues');
	}
}

const ErrorComponent = () => {
	const [error, setError] = useState(false);
	useEffect(() => {
		if (process.browser) redirect().catch(e => setError(e));
	}, []);

	return (
		<Layout>
			<Home>
				<div className={error ? 'animate' : ''}>
					<h1>Not Found</h1>
					<p>
						These three are certain:
						<br />
						Death, taxes, and site not found.
						<br />
						You, victim of one.
					</p>
				</div>
			</Home>
		</Layout>
	);
};

export default ErrorComponent;
