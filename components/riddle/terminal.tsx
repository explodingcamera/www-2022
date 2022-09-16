import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { XTerm } from 'xterm-for-react';
import { FitAddon } from 'xterm-addon-fit';

import chalk from 'chalk';

import { flicker, blink } from './keyframes';

const Wrapper = styled.div`
	min-height: 100vh;
	min-width: 30rem;
	padding: 3rem;
	display: flex;
	background: black;

	&::before {
		content: ' ';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(
				rgba(18, 16, 16, 0) 50%,
				rgba(0, 0, 0, 0.25) 50%
			),
			linear-gradient(
				90deg,
				rgba(255, 0, 0, 0.06),
				rgba(0, 255, 0, 0.02),
				rgba(0, 0, 255, 0.06)
			);
		z-index: 2;
		background-size: 100% 2px, 3px 100%;
		pointer-events: none;
	}

	&:after {
		content: ' ';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(18, 16, 16, 0.1);
		opacity: 0;
		z-index: 2;
		pointer-events: none;
		animation-name: ${flicker};
		animation-duration: 0.15s;
		animation-iteration-count: infinite;
	}

	.scrollbar::-webkit-scrollbar {
		background-color: #fff;
		width: 16px;
	}

	> div {
		flex: 1;
	}

	.xterm-rows {
		filter: drop-shadow(rgba(34, 255, 143, 1) 0px 0px 3px);
	}

	.xterm-viewport {
		&::-webkit-scrollbar {
			background-color: transparent;
			width: 10px;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background-color: white;
			border-radius: 10px;
		}
		&::-webkit-scrollbar-thumb:hover {
			background-color: #a0a0a5;
			border: 4px solid #f4f4f4;
		}

		&::-webkit-scrollbar-button {
			display: none;
		}
	}

	.xterm-cursor-bar {
		animation-name: ${blink};
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-timing-function: step-end;
	}
`;

const wait = async (ms: number) =>
	new Promise(resolve => {
		setTimeout(resolve, ms);
	});

export const Terminal = () => {
	const xtermRef = React.useRef<XTerm>(null);
	const fitAddon = React.useRef(new FitAddon());

	const [, setValue] = useState('');
	const [disableInput] = useState(true);

	const writeWithPause = async (text: string, time: number) => {
		for (const c of text) {
			xtermRef.current?.terminal.write(c);
			// eslint-disable-next-line no-await-in-loop
			await wait(time);
		}
	};

	// const clear = () => xtermRef.current?.terminal.write('\x1bc');

	useEffect(() => {
		const handleResize = () => fitAddon.current.fit();
		window.addEventListener('resize', handleResize);
		console.clear();
		return () => window.removeEventListener('resize', handleResize);
	});

	useEffect(() => {
		const xterm = xtermRef.current;
		fitAddon.current.fit();

		const intro = async () => {
			await writeWithPause(
				chalk.hex('#00ff09')("You're finally awake..."),
				200,
			);
			await wait(2000);
			xterm?.terminal.writeln('');
			await writeWithPause(
				chalk.hex('#00ff09')(
					'You might think you have come far, but this is only the beginning...',
				),
				50,
			);

			await writeWithPause(
				chalk.hex('#00ff09')(
					`We want the best,  
not the followers.  Thus, the first few there will receive
the prize.`,
				),
				50,
			);

			await writeWithPause(
				chalk.hex('#00ff09')(
					// eslint-disable-next-line no-irregular-whitespace
					`Yo​u​​ w​ill ​se​​​e m​e, w​here​ th​e​re i​​s​ ​​no d​arkn​ess`,
				),
				50,
			);
		};

		if (xterm) {
			void intro();
		}

		return () => {
			xterm?.terminal.reset();
			setValue('');
		};
	}, [xtermRef]);

	const onData = (data: string) => {
		if (disableInput) return;

		console.log(data.charCodeAt(0));
		if (data.charCodeAt(0) === 13) {
			return;
		}

		xtermRef?.current?.terminal.write(data);

		setValue(v => v + data);
	};

	return (
		<Wrapper>
			<XTerm
				addons={[fitAddon.current]}
				options={{
					lineHeight: 1,
					cursorStyle: 'bar',
					rendererType: 'dom',
					fontFamily: 'Roboto Mono',
					windowOptions: {
						fullscreenWin: true,
					},
				}}
				ref={xtermRef}
				onData={onData}
			/>
		</Wrapper>
	);
};
