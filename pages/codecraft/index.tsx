import Link from "../../components/link";
import React from "react";
import styled from "@emotion/styled";
import Layout from "../../components/layout";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 60rem;
	justify-content: center;

	font-size: 1.3rem;
	h1,
	h2,
	h3,
	details {
		margin: 1rem 0;
	}
	details {
		cursor: pointer;
	}
	.info {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;

		a {
			color: black;
			width: 100%;
		}
		> * {
			color: black;
			background: linear-gradient(90deg, white, transparent);
			padding: 0.5rem;
			font-size: 1rem;
			display: flex;
			align-items: center;
			border-radius: 0.4rem;
			margin: 0.4rem 0.1rem;
			flex: 1;
		}
		input {
			background: #ffffff83;
			padding: 1px 2px;
			border-radius: 0.2rem;
			margin: 0%;
			color: black;
			border: none;
			margin-left: 0.5rem;
			width: 12rem;
		}
	}
`;

const CodeCraft = () => (
	<Layout disableHeader backgroundColor="linear-gradient(45deg, #07070b, #1155ff63)">
		<Wrapper>
			<h1 id="codecraft-guide">CodeCraft 1.18</h1>
			<div className="info">
				<div>
					<Link href="/codecraft/whitelist">Whitelist</Link>
				</div>
				<div>
					<Link href="/codecraft/guide">Mod Guide</Link>
				</div>
				<div>
					<Link href="https://discord.gg/4HqPH3rjhG">Discord</Link>
				</div>
				<div>
					<Link href="https://map.explodingcamera.com">Map</Link>
				</div>
				<div>
					<Link href="https://map.explodingcamera.com/stats">Stats</Link>
				</div>
				<div>
					IP:
					<input disabled value="cc.explodingcamera.com" />
				</div>
			</div>
			<p>
				Welcome to CodeCraft 1.18! If you want to join the server, be sure to check out our whitelisting
				process and the mod guide above. This season, we're playing on the latest Minecraft update and with
				proximity voice chat.
			</p>
		</Wrapper>
	</Layout>
);

CodeCraft.disableBackground = true;

export default CodeCraft;
