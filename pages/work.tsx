import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Projects = styled(Masonry)``;

const ProjectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 12px;
	background: #4f4f4f69;
	background: linear-gradient(135deg, #61616169 10%, #48484826 100%);
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
		padding-top: 1rem;
		margin-top: auto;
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
	background: linear-gradient(
		135deg,
		rgba(97, 97, 97, 0.63) 10%,
		rgba(72, 72, 72, 0.15) 100%
	);
	transition: all 0.2s ease-in-out 0s;
	&:hover {
		transform: translateY(-1px);
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 2px 0px,
			rgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.11) 0px 1px 5px 0px;
	}
`;

const ImageWrapper = styled.div`
	min-height: 12rem;
	position: relative;
	height: 12rem;
	margin: 1rem 0;
	box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.6);
	border-radius: 8px;
	overflow: hidden;

	img {
		height: inherit;
		width: 100%;
		object-fit: cover;
		object-position: center top;
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
			<img src={`/static/projects/${img}`} alt={title} layout="fill" />
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
		title: 'POG.network',
		from: '2021-now',
		img: 'pog.png',
		text: `With POG.network we're striving to build a green and fast cryptocurrency. I'm focusing on designing the protocol and overall architecture of the project`,
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
		text: `Snowstorm is a react framework I am working on. The goal is to create a lean and fast alternative to next.js by utilising new technologies like es-modules and esbuild. Further, snowstorm is build from the ground up with features of react's upcoming version in mind and supports a wider ecosystem instead of building a walled garden.`,
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
		text: `Effortlessly organize - and smoothly participate in - online esports tournaments for small to medium-sized games.

		I've joined the etournity team as a developer in the summer of 2020 and worked on transitioning the project to next.js and securing the GraphQL API.`,
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
		text: `FantasyMarket is a working stock market simulation where the user can invest in-game currency in a simulated market completely separated from the real world.

I created the software architecture and designed and implemented the react frontend.`,
		buttons: [
			{
				link: 'https://github.com/fantasymarket',
				name: 'code',
			},
		],
	},
	{
		title: 'TwoWeeksOfFood',
		from: '2020',
		img: 'twof.jpeg',
		text: `Created at the #wirvsvirus hackathon, TwoWeeksOfFood aims to help with some of the supply issues created by the COVID-19 Crisis.
This is a small project which I've created together with Arthur Hoge on a single weekend.`,
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
		text: `Recordskip was my first semester-project at Code University. It's an app for record music lovers that tracks your collection and gives you music recommendations for expanding your record collation.

I designed the App in Figma and implemented it with React Native.`,
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
		text: `canX was my first startup. We created a multimedia streaming platform which wasn't supported by ads. Creators could earn money through donations which were made possible by our microtransaction platform.

I created the microservice architecture, implemented and designed the frontend and created the cdn and media processing pipeline`,
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
		text: `LiveCount is/was a realtime follower/subscriber counter with support for multiple social networks and multiple channels at the same time. I created this just as a quick project over the course of one weekend.`,
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
		text: `Musiqpad was/is a open source social-music software platform for users to host their own rooms and enjoy music together with others.

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
		text: `MusiqPlus was a Chrome plugin that enhanced the experience on musiqpad servers with a ton of extra features. This started my involvement with Musiqpad and was one of my first larger projects.`,
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
		text: `My first Node.Js Project, Multitube was a website for viewing two youtube videos side-by-side. I was inspired by youtubemultiplier but their implementation was lacking features and ux was horrible so I build my own site.`,
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
