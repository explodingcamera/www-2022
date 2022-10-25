import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Projects = styled(Masonry)``;

const ProjectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 12px;
	background: #0f1011e0;

	transition: all 0.2s linear;

	&:hover {
		background: #1b1b1ddf;
	}

	backdrop-filter: blur(10px);
	/* background: linear-gradient(
		135deg,
		rgb(0 0 0 / 41%) 10%,
		rgb(72 72 72 / 40%) 100%
	); */
	margin: 0.5rem;
	padding: 1rem;
	box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.35);

	h1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.7rem;
		letter-spacing: -1px;

		span {
			font-size: 1rem;
			color: aqua;
			letter-spacing: -0.3px;
		}
	}

	p {
		margin: 0;
		line-height: 1.4;
		letter-spacing: -0.3px;
		text-shadow: 0px 0px 5px black;
		white-space: pre-line;
	}

	div:last-of-type {
		margin-top: 1rem;
		display: flex;
		a {
			text-decoration: none;
		}
	}
`;

const ProjectButton = styled.button`
	border-radius: 8px;
	text-decoration: none;
	user-select: none;
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	color: rgb(255, 255, 255);
	height: 2.7rem;
	font-size: 1rem;
	font-weight: 600;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 2px 0px,
		rgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.11) 0px 1px 5px 0px;
	margin: 0px 0.5rem 0px 0px;
	padding: 0px 0.8rem;
	outline: none;
	border-width: initial;
	border-style: none;
	border-color: initial;
	border-image: initial;
	background-color: #46424266;
	/* background: linear-gradient(
		135deg,
		rgba(97, 97, 97, 0.63) 10%,
		rgba(72, 72, 72, 0.15) 100%
	); */
	transition: all 0.2s ease-in-out 0s;
	&:hover {
		transform: translateY(-1px);
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 2px 0px,
			rgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.11) 0px 1px 5px 0px;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	aspect-ratio: 16/9;
	background-color: black;
	margin: 1rem 0;
	box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.6);
	border-radius: 8px;
	overflow: hidden;

	img {
		height: inherit;
		width: 100%;
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
	}
`;

interface ProjectInterface {
	title: string;
	from: string;
	img: string;
	text: string;
	buttons?: Array<{ link: string; name: string }>;
}

const Project = ({ title, from, img, text, buttons }: ProjectInterface) => (
	<ProjectWrapper>
		<h1>
			{title}
			<span>{from}</span>
		</h1>
		<ImageWrapper>
			<img src={`/static/projects/${img}`} alt={title} />
		</ImageWrapper>
		<p>{text}</p>
		{buttons && (
			<div>
				{buttons.map(b => (
					<a
						target="_blank"
						rel="noopener noreferrer"
						key={buttons.indexOf(b)}
						href={b.link}
					>
						<ProjectButton>{b.name}</ProjectButton>
					</a>
				))}
			</div>
		)}
	</ProjectWrapper>
);

const projects: ProjectInterface[] = [
	{
		title: 'Keygate',
		from: '2022-now',
		img: 'keygate.png',
		text: `Modular and open-source identity managment, authentication and authorization. Currently in development.`,
		buttons: [
			{
				link: 'https://keygate.io',
				name: 'keygate.io',
			},
		],
	},
	{
		title: 'dawdle.space',
		from: '2022-now',
		img: 'dawdle.png',
		text: `A home for many of my smaller and experimental projects`,
		buttons: [
			{
				link: 'https://dawdle.space',
				name: 'dawdle.space',
			},
		],
	},
	{
		title: 'pog.network wallet',
		from: '2021-now',
		img: 'pogwallet.png',
		text: `Official wallet application for connecting to the pog.network cryptocurrency`,
		buttons: [
			{
				link: 'https://github.com/pognetwork/catjam',
				name: 'code',
			},
		],
	},
	// {
	// 	title: 'JustMeet',
	// 	from: '2022-now',
	// 	img: 'justmeet.gif',
	// 	text: `JustMeet is a fresh new take on making friends by bringing video game Matchmaking to the real world. Currently in development.`,
	// },
	// {
	// 	title: 'pog.network wallet',
	// 	from: '2021-now',
	// 	img: 'pogwallet.png',
	// 	text: `Official wallet application for connecting to the pog.network cryptocurrency`,
	// 	buttons: [
	// 		{
	// 			link: 'https://github.com/pognetwork/catjam',
	// 			name: 'code',
	// 		},
	// 	],
	// },
	{
		title: 'pog.network',
		from: '2021-now',
		img: 'pog.network.webp',
		text: `With POG.network we're striving to build a green and fast cryptocurrency. I'm the team lead, designed the protocol and created the architecture of the project`,
		buttons: [
			{
				link: 'https://github.com/pognetwork',
				name: 'code',
			},
			{
				link: 'https://pog.network',
				name: 'pog.network',
			},
		],
	},
	{
		title: 'Snowstorm',
		from: '2021-now',
		img: 'snowstorm.png',
		text: `Snowstorm is a lean and fast alternative to next.js, made possible by utilizing new technologies like ES modules and new build tools like es-build. Further, Snowstorm is build from the ground up with React 18.0 in mind. It supports a broader ecosystem instead of building a walled garden.`,
		buttons: [
			{
				link: 'https://github.com/explodingcamera/snowstorm',
				name: 'code',
			},
			{
				link: 'https://snowstorm.js.org',
				name: 'snowstorm.js.org',
			},
		],
	},
	{
		title: 'Etournity',
		from: '2020',
		img: 'etournity.png',
		text: `Etournity wants gamers to organize and participate in online esports tournaments effortlessly.

I joined the Etournity team as a developer in the summer of 2020. My focus was on transitioning the project to next.js and securing the GraphQL API.`,
		buttons: [
			{
				link: 'https://etournity.com',
				name: 'etournity.com',
			},
		],
	},
	{
		title: 'FantasyMarket',
		from: '2020',
		img: 'fantasymarket.png',
		text: `FantasyMarket is a working stock market simulation where the user can invest in-game currency in a simulated market wholly separated from the real world.

I created the software architecture and designed and implemented the react frontend.`,
		buttons: [
			{
				link: 'https://github.com/fantasymarket',
				name: 'code',
			},
		],
	},
	{
		title: 'clickland.app',
		from: '2020',
		img: 'clickland.gif',
		text: `Clickland is a game platform I was working on at the start of 2020, based around a central clicker-based gameworld connected to many mini-games similar to neopets.`,
	},

	{
		title: 'TwoWeeksOfFood',
		from: '2020',
		img: 'twof.jpeg',
		text: `Created at the #wirvsvirus hackathon, TwoWeeksOfFood aims to help with some of the supply issues created by the COVID-19 Crisis. It is a small project I've created together with Arthur Hoge on a single weekend.`,
		buttons: [
			{
				link: 'https://twoweeksoffood.netlify.com',
				name: 'website',
			},
			{
				link: 'https://www.linkedin.com/posts/arthurhoge_wevsvirus-activity-6648368790553800704-gTAQ',
				name: 'more info',
			},
			{
				link: 'https://github.com/twoweeksoffood/twoweeksoffood',
				name: 'code',
			},
		],
	},
	{
		title: 'recordskip',
		from: '2019',
		img: 'recordskip.jpeg',
		text: `Recordskip is an app for vinyl record lovers tracks your collection with the help of Image Recognition and gives you music recommendations for expanding your musical horizons.

I designed the App and implemented it with React Native.`,
		buttons: [
			{
				link: 'https://github.com/recordskip/recordskip-app',
				name: 'code',
			},
		],
	},
	{
		title: 'canX',
		from: '2018 - 2020',
		img: 'canx-min.png',
		text: `canX was my first startup. We created a multimedia streaming platform that isn't supported by ads. Creators instead earn money through donations made possible by our micropayments platform.

I designed the microservice architecture, implemented and designed the frontend, created the CDN and media processing pipeline, and lead a small team of developers.`,
		buttons: [
			{
				link: 'https://canx.org',
				name: 'canX.org',
			},
		],
	},
	{
		title: 'livecount.pro',
		from: '2017 - 2019',
		img: 'livecount-min.png',
		text: `LiveCount Pro is a real-time anaylytics platform and dashboard with support for multiple social networks and multiple channels simultaneously.`,
		buttons: [
			{
				link: 'https://livecount.pro',
				name: 'livecount.pro',
			},
			{
				link: 'https://github.com/explodingcamera/livecount.pro',
				name: 'code',
			},
		],
	},
	{
		title: 'musiqpad',
		from: '2016',
		img: 'musiqpad-min.png',
		text: `Musiqpad ia an open-source social-music software platform for users to host their own chatrooms and enjoy music together with others.

I worked on modernizing the codebase and finding and fixing security vulnerabilities.`,
		buttons: [
			{
				link: 'https://github.com/musiqpad/mqp-server',
				name: 'code',
			},
		],
	},
	{
		title: 'musiqplus',
		from: '2015-2016',
		img: 'musiqplus.jpg',
		text: `MusiqPlus ia a Google Chrome plugin that enhanced the experience on musiqpad servers with a ton of extra features. This started my involvement with Musiqpad and was one of my first larger projects.`,
		buttons: [
			{
				link: 'https://github.com/explodingcamera/musiqplus',
				name: 'code',
			},
		],
	},
	{
		title: 'multitube.cf',
		from: '2014',
		img: 'multitube-min.png',
		text: `Multitube enables users to view multiple YouTube-Videos side-by-side to enable interesting ways for collaboration.`,
		buttons: [
			{
				link: 'https://github.com/explodingcamera/multitube',
				name: 'code',
			},
		],
	},
];

const ProjectsComponent = () => (
	<Layout>
		<ResponsiveMasonry>
			<Projects>
				{projects.map(p => (
					<Project key={projects.indexOf(p)} {...p} />
				))}
			</Projects>
		</ResponsiveMasonry>
	</Layout>
);

export default ProjectsComponent;
