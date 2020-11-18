import React, { useRef, useEffect, useState } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';
import notebook from '1dca47f33f5a5cce';
import styled, { css } from 'styled-components';
import Layout from '../components/layout';
import DarkModeToggel from 'react-dark-mode-toggle';

const LayoutWrapper = styled(Layout)`
	${props =>
		props.inverted &&
		css`
			background-color: black;
			filter: invert(1);

			iframe {
				filter: invert(1);
			}

			button {
				filter: invert(1);
			}
		`}
	button svg {
		filter: none;
	}
`;

const dracula = `.hljs{display:block;overflow-x:auto;padding:.5em;background:#282a36}.hljs-built_in,.hljs-selector-tag,.hljs-section,.hljs-link{color:#8be9fd}.hljs-keyword{color:#ff79c6}.hljs,.hljs-subst{color:#f8f8f2}.hljs-title{color:#50fa7b}.hljs-string,.hljs-meta,.hljs-name,.hljs-type,.hljs-attr,.hljs-symbol,.hljs-bullet,.hljs-addition,.hljs-variable,.hljs-template-tag,.hljs-template-variable{color:#f1fa8c}.hljs-comment,.hljs-quote,.hljs-deletion{color:#6272a4}.hljs-keyword,.hljs-selector-tag,.hljs-literal,.hljs-title,.hljs-section,.hljs-doctag,.hljs-type,.hljs-name,.hljs-strong{font-weight:700}.hljs-literal,.hljs-number{color:#bd93f9}.hljs-emphasis{font-style:italic}`;
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	position: relative;

	.darkMode {
		position: absolute;
		right: 0;
		height: 100%;

		button {
			position: sticky;
			top: 1rem;
			right: 0;
		}
	}

	.Notebook {
		max-width: 85ch;
		width: 100%;
	}

	.katex svg {
		fill: black;
	}

	font-family: 'Source Serif Pro', Iowan Old Style, Apple Garamond,
		Palatino Linotype, Times New Roman, 'Droid Serif', Times, serif,
		Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
	font-size: 17px;
	line-height: 1.5;

	${dracula}
	.hljs {
		background: #1c1c1c;
		border-radius: 9px;
		box-shadow: 1px 0px 10px rgb(0 0 0);
	}
	svg {
		filter: invert(1);
		background-color: transparent !important;
	}

	a,
	a * {
		color: rgba(80, 250, 123, 1) !important;
		background-color: transparent !important;
	}
	a:hover,
	a:hover *,
	a:visited:hover,
	a:visited:hover *,
	span[onclick]:hover,
	div[onclick]:hover,
	[role='link']:hover,
	[role='link']:hover *,
	[role='button']:hover *,
	[role='menuitem']:hover,
	[role='menuitem']:hover *,
	.link:hover,
	.link:hover * {
		color: rgba(241, 250, 140, 1) !important;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	strong,
	[id*='headline'],
	[class*='headline'],
	[id*='header'],
	[class*='header'],
	[class*='header'] td {
		color: rgb(252, 252, 253) !important;
	}

	h2 {
		color: rgb(226, 226, 229) !important;
	}

	h4 {
		margin: 2rem 0 1rem 0;
	}

	table {
		color: rgb(226, 226, 229) !important;
	}
`;

const NotebookComponent = () => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<LayoutWrapper
			inverted={!darkMode}
			disableBackground
			backgroundColor="rgba(40, 42, 54, 1)"
		>
			<Wrapper>
				<div className="darkMode">
					<DarkModeToggel onChange={setDarkMode} checked={darkMode} />
				</div>
				<Notebook />
			</Wrapper>
		</LayoutWrapper>
	);
};

export default NotebookComponent;

const Notebook = () => {
	const ref = useRef();

	useEffect(() => {
		new Runtime().module(notebook, name => {
			if (name === 'intro')
				return Inspector.into(ref.current.querySelector('.intro'))();
			if (name === 'abstract')
				return Inspector.into(ref.current.querySelector('.abstract'))();
			if (name === 'euclid')
				return Inspector.into(ref.current.querySelector('.euclid'))();
			if (name === 'gcdmd')
				return Inspector.into(ref.current.querySelector('.gcdmd'))();
			if (name === 'viewof args')
				return Inspector.into(ref.current.querySelector('.viewof-args'))();
			if (name === 'gcdview')
				return Inspector.into(ref.current.querySelector('.gcdview'))();
			if (name === 'basic')
				return Inspector.into(ref.current.querySelector('.basic'))();
			if (name === 'array')
				return Inspector.into(ref.current.querySelector('.array'))();
			if (name === 'll')
				return Inspector.into(ref.current.querySelector('.ll'))();
			if (name === 'stacks')
				return Inspector.into(ref.current.querySelector('.stacks'))();
			if (name === 'queues')
				return Inspector.into(ref.current.querySelector('.queues'))();
			if (name === 'hash')
				return Inspector.into(ref.current.querySelector('.hash'))();
			if (name === 'graphs')
				return Inspector.into(ref.current.querySelector('.graphs'))();
			if (name === 'graphmd')
				return Inspector.into(ref.current.querySelector('.graphmd'))();
			if (name === 'trees')
				return Inspector.into(ref.current.querySelector('.trees'))();
			if (name === 'dfs')
				return Inspector.into(ref.current.querySelector('.dfs'))();
			if (name === 'depthFirstSearchResult')
				return Inspector.into(
					ref.current.querySelector('.depthFirstSearchResult'),
				)();
			if (name === 'dfsmd')
				return Inspector.into(ref.current.querySelector('.dfsmd'))();
			if (name === 'advanced')
				return Inspector.into(ref.current.querySelector('.advanced'))();
			if (name === 'bloom')
				return Inspector.into(ref.current.querySelector('.bloom'))();
			// If (name === 'BloomFilter')
			// 	return Inspector.into(ref.current.querySelector('.BloomFilter'))();
			if (name === 'bloommd')
				return Inspector.into(ref.current.querySelector('.bloommd'))();
			if (name === 'radix')
				return Inspector.into(ref.current.querySelector('.radix'))();
			if (name === 'radixSort')
				return Inspector.into(ref.current.querySelector('.radixSort'))();
			if (name === 'radixmd')
				return Inspector.into(ref.current.querySelector('.radixmd'))();
			if (name === 'viewof randomArray')
				return Inspector.into(
					ref.current.querySelector('.viewof-randomArray'),
				)();
			if (name === 'radixView')
				return Inspector.into(ref.current.querySelector('.radixView'))();
			if (name === 'credits')
				return Inspector.into(ref.current.querySelector('.credits'))();
		});
	}, []);

	return (
		<div className="Notebook" ref={ref}>
			<div className="intro" id="intro" />
			<div className="abstract" id="abstract" />
			<div className="euclid" id="euclid" />
			<div className="gcdmd" id="gcdmd" />
			<div className="viewof-args" id="viewof-args" />
			<div className="gcdview" id="gcdview" />
			<div className="basic" id="basic" />
			<div className="array" id="array" />
			<div className="ll" id="ll" />
			<div className="stacks" id="stacks" />
			<div className="queues" id="queues" />
			<div className="hash" id="hash" />
			<div className="graphs" id="graphs" />
			<div className="graphmd" id="graphmd" />
			<div className="trees" id="trees" />
			<div className="dfs" id="dfs" />
			<div className="depthFirstSearchResult" id="depthFirstSearchResult" />
			<div className="dfsmd" id="dfsmd" />
			<div className="advanced" id="advanced" />
			<div className="bloom" id="bloom" />
			<div className="BloomFilter" id="BloomFilter" />
			<div className="bloommd" id="bloommd" />
			<div className="radix" id="radix" />
			<div className="radixSort" id="radixSort" />
			<div className="radixmd" id="radixmd" />
			<div className="viewof-randomArray" id="viewof-randomArray" />
			<div className="radixView" id="radixView" />
			<div className="credits" id="credits" />
		</div>
	);
};
