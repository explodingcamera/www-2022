import React from 'react';
import styled from 'styled-components';

import Parallax from 'parallax-js';

const Background = styled.div`
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

	> video {
		height: 130vh;
		flex: 1;
		object-fit: cover;
	}
`;

export default class extends React.Component {
	background = React.createRef();

	componentDidMount() {
		const scene = this.background.current;
		this.parallax = new Parallax(scene, {});
	}

	render() {
		return (
			<Background ref={this.background}>
				<video data-depth="0.3" autoPlay loop muted src="static/bg.webm" />
			</Background>
		);
	}
}
