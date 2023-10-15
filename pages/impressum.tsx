import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import Link from "./../components/link";
import Layout from "../components/layout";

const Impressum = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;

	a {
		color: #888888;

		&:hover {
			color: #ffffff;
		}
	}

	h1 {
		font-size: 3em;
		margin-top: 4rem;
	}

	h2 {
		font-size: 2em;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	p {
		margin-top: 0.5rem;
		font-size: 1.3rem;
		line-height: 1.7;
		max-width: 60rem;
		white-space: pre-wrap;
		color: #ececec;
		a {
			white-space: pre;
		}
	}

`;

const ImpressumComponent = () => (
	<Layout>
		<Impressum>
			<h1>Legal Notice</h1>
			<p>
				Information according to § 5 TMG & Represented by:
				<br />
				<br />
				Henry Gressmann Software Engineering
				<br />
				c/o Factory Works GmbH
				<br />
				Lohmühlenstraße 65
				<br />
				12435 Berlin
				<br />
				Germany
				<br />
				<br />
				E-Mail: <Link href="mailto:mail@henrygressmann.de">mail@henrygressmann.de</Link>
				<br />
				Tel: +49 030-98442918
				<br />
				<br />
				The European Commission provides a platform for out-of-court online dispute resolution (ODR platform),
				which can be accessed at{" "}
				<Link href="https://www.ec.europa.eu/consumers/odr">www.ec.europa.eu/consumers/odr</Link> . Consumers
				have the possibility to use this platform for the settlement of their disputes. I am neither obliged
				nor willing to participate in the dispute resolution procedure
			</p>
			<h1>Pricavy Policy</h1>
			<p>
				Responsible person in terms of data protection laws, in particular the EU General Data Protection
				Regulation (DSGVO), is Henry Gressmann (contact information are above)
			</p>
			<h2>Your data protection rights</h2>
			<p>
				If you contact us by e-mail, the data provided will be stored by us in order to process your request.
				<br />
				As a data subject, you have the right to information, the right to rectification or deletion, the
				right to restrict processing and the right to object to the processing of your data. If you have given
				us consent, you can revoke this at any time with effect for the future. Please send your objection [or
				revocation] informally to the following address:{" "}
				<Link href="mailto:mail@henrygressmann.de">mail@henrygressmann.de</Link>. <br />
				If you have given us consent, you can revoke it at any time with effect for the future.
				<br />
				You may at any time lodge a complaint with a supervisory authority, e.g. the competent supervisory
				authority in the federal state of your residence or the authority responsible for us as the
				controller.
				<br />
				A list of supervisory authorities (for the non-public sector) with address can be found at{" "}
				<Link href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html">
					www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html
				</Link>
				.
			</p>

			<h2>Meetings</h2>
			<p>
				If you scheudle a meeting, your data will be processed by cal.com, their privacy policy is available
				at <Link href="https://cal.com/privacy">cal.com/privacy</Link>.
			</p>

			<h2>Analytics</h2>
			<p>
				We use Plausible Analytics, no personal data is collected. You can find information about the data
				collected here: <a href="https://plausible.io/data-policy">plausible.io/data-policy</a>. All data is
				stored on servers in Germany.
			</p>

			<h2>Hosting</h2>
			<p>
				Our hosters collects the following data transmitted by your browser in so-called log files: IP
				address, the address of the previously visited website (referer request header), date and time of the
				request, time zone difference from Greenwich Mean Time, content of the request, HTTP status code,
				amount of data transferred, website from which the request came and information about the browser and
				operating system. This is necessary to display our website and to ensure stability and security. This
				corresponds to our legitimate interest within the meaning of Art. 6 para. 1 p. 1 lit. f DSGVO.
				<br />
				<br />
				We use the following hosters to make our website available:
				<br />
			</p>
			<h3>Hetzner Online GmbH</h3>
			<p>
				Industriestr. 25, 91710 Gunzenhausen
				<br />
				<a href="https://www.hetzner.com/de/rechtliches/datenschutz">
					www.hetzner.com/de/rechtliches/datenschutz
				</a>
			</p>
			<h3>Github Pages</h3>
			<p>
				88 Colin P Kelly Jr St, San Francisco, CA 94107, USA We use GitHub Pages to host static files like
				images, fonts, and JavaScript files. This entity is the recipient of your personal data. This is in
				line with our legitimate interest as defined by Art. 6 Para. 1 S. 1 lit. f GDPR, so that we don't have
				to maintain our own server on our premises. The server location is the USA. For further information on
				how to object or remove data on GitHub, you can check:{" "}
				<a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
					docs.github.com/en/github/site-policy/github-privacy-statement
				</a>
				<br />
				You have the right to object to the data processing. Whether the objection is successful needs to be
				determined through a balancing of interests. The data will be deleted as soon as the purpose of its
				processing has been fulfilled. Processing of the data specified in this section is neither legally nor
				contractually required. However, the functionality of the website is not guaranteed without this
				processing. GitHub has implemented compliance measures for international data transfers. These apply
				to all global activities where GitHub processes personal data of individuals in the EU. These measures
				are based on EU Standard Contractual Clauses (SCCs). More info can be found at:{" "}
				<a href="https://docs.github.com/en/site-policy/privacy-policies">
					https://docs.github.com/en/site-policy/privacy-policies
				</a>
			</p>

			<h3>Cloudflare</h3>
			<p>
				We use the Content Delivery Network (CDN) provided by Cloudflare Germany GmbH, Rosental 7, c/o
				Mindspace, 80331 München, Germany (Cloudflare), to enhance the security and delivery speed of our
				website. This aligns with our legitimate interest (Art. 6 para. 1 lit. f GDPR). A CDN is a network of
				globally distributed servers capable of delivering optimized content to website users. For this
				purpose, personal data may be processed in Cloudflare's server log files. Please refer to the
				"Hosting" section for more details.
				<br />
				Cloudflare acts as a recipient of your personal data and serves as a processor on our behalf. This is
				also in line with our legitimate interest under Art. 6 para. 1, sentence 1, lit. f GDPR, as it allows
				us to not operate a CDN ourselves.
				<br />
				You have the right to object to the processing. Whether the objection is successful will be determined
				through a balance of interests assessment.
				<br />
				The processing of data specified in this section is neither legally nor contractually required.
				However, the functionality of the website cannot be guaranteed without this processing.
				<br />
				Your personal data will be stored by Cloudflare for as long as necessary for the stated purposes.
				<br />
				For more information on objection and deletion options against Cloudflare, please refer to:{" "}
				<a href="https://www.cloudflare.com/de-de/cloudflare-customer-dpa/">Cloudflare DPA</a>

				<br />
				Cloudflare has implemented compliance measures for international data transfers. These apply to all
				global activities where Cloudflare processes personal data of individuals in the EU. These measures
				are based on the EU Standard Contractual Clauses (SCCs). For more information, please visit:{" "}
				<a href="https://www.cloudflare.com/cloudflare_customer_SCCs-German.pdf">
					www.cloudflare.com/cloudflare_customer_SCCs-German.pdf
				</a>
				.
			</p>
		</Impressum>
	</Layout>
);

export default ImpressumComponent;
