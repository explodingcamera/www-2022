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
	summary {
		cursor: pointer;
	}
	li {
		padding: 0.5rem 0;
		line-height: 1.5;
	}
`;

const Guide = () => (
	<Layout disableHeader backgroundColor="linear-gradient(45deg, #07070b, #1155ff63)">
		<Wrapper>
			<h1 id="codecraft-guide">CodeCraft Mod Guide</h1>
			<p>
				Hi! In this guide I&#39;ll explain how you can install various mods to enhance your experience on the
				CodeCraft server. Please note that installing mods is optional but recommended. Especially
				simple-voice-chat, which enables proximity based voice chat on our server.
			</p>
			<h2 id="installing-mods">Installing mods</h2>
			<details>
				<summary>MultiMC (recommended)</summary>
				<MultiMC />
			</details>
			<details>
				<summary>Minecraft Launcher</summary>
				<ol>
					<li>Download and install the Minecraft Launcher on the Microsoft store</li>
					<li>
						Download the Fabric installer from <a href="https://fabricmc.net/use/">here</a>.
					</li>
					<li>Ensure the Minecraft Launcher is not running</li>
					<li>
						Open the installer. In the window you need to select the latest mapping and loader version for
						minecraft 1.18.1 and the install location (the default should be fine on most platforms).
					</li>
					<li>
						Press Install. A new game version and profile will be created in the launcher&#39;s menu, which
						you can now use to launch Fabric.
					</li>
					<li>
						Download the fabric API mod (this is required for most other mods){" "}
						<a href="https://modrinth.com/mod/fabric-api/versions">here</a>
					</li>
					<li>
						Download <code>simple-voice-chat</code>{" "}
						<a href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/3557160">here</a>{" "}
						(choose the latest [FABRIC] 1.18.1 version)
					</li>
					<li>
						Navigate to <code>%AppData%/.minecraft</code>
					</li>
					<li>
						Create a new folder called <code>mods</code> and move the <code>.jar</code> file you&#39;ve
						downloaded here
					</li>
				</ol>
				<p>
					If you have any issues, check out these guides:{" "}
					<a href="https://shockbyte.com/billing/knowledgebase/212/How-to-install-FabricMC-on-your-PC.html">
						Installing Fabric
					</a>{" "}
					<a href="https://shockbyte.com/billing/knowledgebase/213/How-to-install-Fabric-Mods-on-your-PC.html">
						Installing Fabric Mods
					</a>
				</p>
			</details>
		</Wrapper>
	</Layout>
);

Guide.disableBackground = true;

const MultiMC = () => (
	<ul>
		<li>
			<h3 id="installing-multimc">Installing MultiMC</h3>
			<ol>
				<li>
					Download and install Java 17 (I recommend you use <a href="https://adoptium.net/">this</a>)
				</li>
				<li>
					Install Multimc
					<ul>
						<li>Arch-Based: Available on the AUR</li>
						<li>
							Debian/Ubuntu: Download the latest version <a href="https://multimc.org/#Download">here</a> and
							install it:
							<br />
							<code>$ sudo apt install ~/Downloads/multimc_1.6-1.deb</code>
						</li>
						<li>
							Windows:
							<ol>
								<li>
									Download it <a href="https://multimc.org/#Download">here</a>
								</li>
								<li>
									Extract the zip file, e.g to your desktop or <code>C:\Program Files\multimc</code>
								</li>
								<li>Optionally create a shortcut for MultiMC.exe and use it to launch the program</li>
							</ol>
						</li>
					</ul>
				</li>
				<li>Start MultiMC</li>
				<li>
					If your java 17 installation isn't detected automatically, choose the correct folder, in my case
					this was <code>C:/Program Files/Eclipse Adoptium/jdk-17.0.1.12-hotspot/bin/javaw.exe</code> (If you
					used the link above to install java)
				</li>
			</ol>
		</li>
		<li>
			<h3 id="installing-fabric-mods">Installing Fabric Mods</h3>
			<p>
				I recommend you use fabric for installing mods, however it is also possible to install the voice chat
				mod using forge.
				<br />
				For easier installation, I provide a prepacked zip with most necessary mods already installed,
				including voice-chat and shader support.
			</p>
			<ol>
				<li>Open MultiMC and press "Add Instance"</li>
				<li>Select "Import from zip"</li>
				<li>
					Copy the following link and paste it in your MultiMC window:
					<input
						readOnly
						onClick={(e) => (e.target as any).select()}
						value="https://github.com/explodingcamera/files/releases/download/v2/1.18.1-codecraft.zip"
					/>
				</li>
				<li>Press Launch and login to your minecraft account to launch the game!</li>
			</ol>
		</li>
	</ul>
);

export default Guide;
