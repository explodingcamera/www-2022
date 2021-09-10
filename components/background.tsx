import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Parallax from 'parallax-js';

const BackgroundWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: black;
	z-index: -1;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	@media print {
		background: white;
	}

	> img {
		height: 130vh;
		flex: 1;
		object-fit: cover;
	}

	> div {
		position: absolute;
		background: rgba(0, 0, 0, 0.6);
		height: 100vh;
		width: 100vw;
	}
`;

export const Background = () => {
	const bg = useRef();
	const [parallax, setParallax] = useState();

	useEffect(() => {
		if (bg.current) {
			setParallax(new Parallax(bg.current, {}));
		}
	}, []);

	return (
		<BackgroundWrapper ref={bg}>
			<img data-depth="0.3" src="/static/bg.webp" />
			{/* <video data-depth="0.3" autoPlay loop muted preload="auto">
				<source src="/static/bg.webm" type='video/webm; codecs="vp8, vorbis"' />
				<source src="/static/bg.mp4" type="video/mp4" />
			</video> */}
			<div data-depth="0" />
		</BackgroundWrapper>
	);
};
