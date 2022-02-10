import React, { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { NextRouter, withRouter } from 'next/router';

const gradient = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const activeCSS = css`
	content: '';
	position: absolute;
	width: 100%;
	height: 2px;
	bottom: -5px;
	left: 0;
	background: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
	background-size: 600% 600%;
	animation: ${gradient} 30s ease infinite;
	transform: scaleX(0);
	transition: all 0.48s cubic-bezier(1, 0, 0, 1);
	transform-origin: left;
`;

const fontColorCSS = css`
	background: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
	background-size: 600% 600%;
	animation: ${gradient} 5s linear infinite;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Link = styled.a<{ active?: boolean; animateFontColor?: boolean }>`
	animation-delay: 0.5s;
	animation-duration: 0.6s;
	animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
	transition: color 0.6s ease-in-out;
	position: relative;
	transition: color 0.6s ease-in-out;
	text-decoration: none;
	color: ${props =>
		props.active || props.animateFontColor ? 'white' : '#7e7e7e'};

	&:before {
		${props => !props.animateFontColor && activeCSS}
		${props => props.active && 'transform: scaleX(1);'}
	}
	&:hover {
		color: white;
		${props => props.animateFontColor && fontColorCSS}
		&::before {
			transform: scaleX(1);
		}
	}

	svg {
		display: flex;
		height: 1.3rem;
		width: 1.3rem;
		color: white;
	}
`;

const Item = ({ children, router, href, animateFontColor, target }: ItemProps) => {
	const handleClick = e => {
		e.preventDefault();
		void router.push(href);
	};

	return (
		<Link
			href={href}
			target={target}
			onClick={(target||href.includes(':') )? undefined : handleClick}
			active={router.pathname === href}
			animateFontColor={animateFontColor}
		>
			{children}
		</Link>
	);
};

interface ItemProps {
	target?: string;
	href: string;
	router: NextRouter;
	children?: ReactNode;
	animateFontColor?: boolean;
}

Item.defaultProps = {
	animateFontColor: false,
};

export default withRouter(Item);
