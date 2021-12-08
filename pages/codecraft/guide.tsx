import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';

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
`;

const Whitelist = () => (
	<Layout
		disableHeader
		backgroundColor="linear-gradient(45deg, #07070b, #1155ff63)"
		disableBackground
	>
		<Wrapper>
			<h1 id="codecraft-guide">CodeCraft Mod Guide</h1>
			<p>
				Hi! In this guide I&#39;ll explain how you can install various mods to
				enhance your experience on the codecraft server. Please note that
				installing mods is optional but recommended. Especially
				simple-voice-chat, which enables proximity based voice chat on our
				server.
			</p>
			<h2 id="installing-mods">Installing mods</h2>
			<details>
				<summary>MultiMC (recommended)</summary>
				<MultiMC />
			</details>
			<details>
				<summary>Minecraft Launcher</summary>
				<ul>
					<li>
						Download and install the Minecarft Launcher on the Microsoft store
					</li>
					<li>
						Download the Fabric installer from{' '}
						<a href="https://fabricmc.net/use/">here</a>.
					</li>
					<li>Ensure the Minecraft Launcher is not running</li>
					<li>
						Open the installer. In the window you need to select the latest
						mapping and loader version for minecarft 1.18 and the install
						location (the default should be fine on most platforms).
					</li>
					<li>
						Press Install. A new game version and profile will be created in the
						launcher&#39;s menu, which you can now use to launch Fabric.
					</li>
					<li>
						Download the fabric API mod (this is required for most other mods){' '}
						<a href="https://modrinth.com/mod/fabric-api/versions">here</a>
					</li>
					<li>
						Download <code>simple-voice-chat</code>{' '}
						<a href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/3551416">
							here
						</a>{' '}
						(choose the latest [FABRIC] 1.18 version)
					</li>
					<li>
						Navigate to <code>%AppData%/.minecraft</code>
					</li>
					<li>
						Create a new folder called <code>mods</code> and move the{' '}
						<code>.jar</code> file you&#39;ve downloaded here
					</li>
				</ul>
				<p>
					If you have any issues, check out these guides:{' '}
					<a href="https://shockbyte.com/billing/knowledgebase/212/How-to-install-FabricMC-on-your-PC.html">
						Installing Fabric
					</a>{' '}
					<a href="https://shockbyte.com/billing/knowledgebase/213/How-to-install-Fabric-Mods-on-your-PC.html">
						Installing Fabric Mods
					</a>
				</p>
			</details>
		</Wrapper>
	</Layout>
);

const MultiMC = () => (
	<ul>
		<li>
			<h3 id="installing-multimc">Installing MultiMC</h3>
			<ul>
				<li>
					Downlad and install Java 17 (I recommend you use{' '}
					<a href="https://adoptium.net/">this</a>)
				</li>
				<li>
					Install Multimc
					<ul>
						<li>Arch-Based: Available on the AUR</li>
						<li>
							Debian/Ubuntu: Download The latest version{' '}
							<a href="https://multimc.org/#Download">here</a> and install it:\
							<code>$ sudo apt install ~/Downloads/multimc_1.6-1.deb</code>
						</li>
						<li>
							Windows:
							<ol>
								<li>
									Download it <a href="https://multimc.org/#Download">here</a>
								</li>
								<li>
									Extract the zip file, e.g to your desktop or{' '}
									<code>C:\Program Files\multimc</code>
								</li>
								<li>
									Optionally create a shortcut for MultiMC.exe and use it to
									launch the program
								</li>
							</ol>
						</li>
					</ul>
				</li>
				<li>Start MultiMC</li>
				<li>
					If java 17 isn&#39;t detected, choose the correct folder, e.g.{' '}
					<code>
						C:/Program Files/Eclipse
						Adoptium/jdk-17.0.1.12-hotspot/bin/javaw.exe
					</code>{' '}
					(If you used the link above to install java)
				</li>
				<li>Choose at least 4000mb of RAM for the minimum AND maximum</li>
			</ul>
		</li>
		<li>
			<h3 id="installing-fabric-mods">Installing Fabric Mods</h3>
			<p>
				I reccomend you use fabric for installing mods, however it is also
				possible to install the voice chat mod using forge. Fabric is also
				compatible with optifine using{' '}
				<a href="https://www.curseforge.com/minecraft/mc-mods/optifabric">
					optifabric
				</a>
				, however I reccomend to use the Sodium and Lithium mods instead. These
				are available{' '}
				<a href="https://modrinth.com/mods?q=&amp;f=categories%3Autility&amp;v=1.18">
					here
				</a>
				.<br />
				<br />
				So, let&#39;s install some mods!
			</p>
			<ul>
				<li>Create a new game instance.</li>
				<li>
					Select “Edit Instance” in the instance context menu (right click on
					your instance) or on the right side of the window.
				</li>
				<li>
					On the Version tab of the configuration window, click “Install Fabric”
					to bring up a dialog with all the available Fabric Loader versions.
					Choose the latest available Loader version
				</li>
				<li>
					Press OK. Your Fabric instance is ready to go - now let&#39;s add mods
					to it!
				</li>
				<li>
					Download the fabric API mod (this is required for most other mods){' '}
					<a href="https://modrinth.com/mod/fabric-api/versions">here</a>
				</li>
				<li>
					Download <code>simple-voice-chat</code>{' '}
					<a href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/3551416">
						here
					</a>{' '}
					(choose the latest [FABRIC] 1.18 version)
				</li>
				<li>
					Head over to the &quot;Loader Mods&quot; tab in the instance settings
					and add the <code>.jar</code> Files of all mods which you want to
					install
				</li>
				<li>
					Press Launch and login to your minecraft account to launch the game!
				</li>
			</ul>
		</li>
	</ul>
);

export default Whitelist;
