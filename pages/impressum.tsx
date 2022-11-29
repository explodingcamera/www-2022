import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import Link from './../components/link';
import Layout from '../components/layout';

const gradient = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`;

const Impressum = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 3em;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(270deg, #ff0000, #008cff, #50ff00);
		background-size: 600% 600%;
		animation: ${gradient} 10s ease infinite;
	}

	p {
		font-size: 1.4rem;
		line-height: 1.5;
		max-width: 40rem;
		white-space: pre-wrap;
		a {
			white-space: pre;
		}
	}
`;

const ImpressumComponent = () => (
	<Layout>
		<Impressum>
			<h1>legal notice</h1>
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
				E-Mail:{' '}
				<Link href="mailto:mail@henrygressmann.de">mail@henrygressmann.de</Link>
				<br />
				Tel: +49 030-98442918
				<br />
				<br />
				The European Commission provides a platform for out-of-court online
				dispute resolution (ODR platform), which can be accessed at{' '}
				<Link href="https://www.ec.europa.eu/consumers/odr">
					www.ec.europa.eu/consumers/odr
				</Link>{' '}
				. Consumers have the possibility to use this platform for the settlement
				of their disputes. I am neither obliged nor willing to participate in
				the dispute resolution procedure
			</p>
			<h1>privacy policy</h1>
			<p>
				I personally don't collect any personal data.
				<br />
				<br />
				If you scheudle a meeting, your data will be processed by cal.com, their
				privacy policy is available at{' '}
				<Link href="https://cal.com/privacy">cal.com/privacy</Link>.
				<br />
				<br />
				Responsible person in terms of data protection laws, in particular the
				EU General Data Protection Regulation (DSGVO), is Henry Gressmann
				(contact information are above)
				<br />
				<br />
				<b>
					<i>Your data protection rights</i>
				</b>
				<br />
				If you contact us by e-mail, the data provided will be stored by us in
				order to process your request.
				<br />
				As a data subject, you have the right to information, the right to
				rectification or deletion, the right to restrict processing and the
				right to object to the processing of your data. If you have given us
				consent, you can revoke this at any time with effect for the future.
				Please send your objection [or revocation] informally to the following
				address:{' '}
				<Link href="mailto:mail@henrygressmann.de">mail@henrygressmann.de</Link>
				. <br />
				<br />
				If you have given us consent, you can revoke it at any time with effect
				for the future.
				<br />
				You may at any time lodge a complaint with a supervisory authority, e.g.
				the competent supervisory authority in the federal state of your
				residence or the authority responsible for us as the controller.
				<br />
				<br />A list of supervisory authorities (for the non-public sector) with
				address can be found at{' '}
				<Link href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html">
					www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html
				</Link>
				.
			</p>
			<h3>Cloudflare</h3>
			<p>
				Wir nutzen das Content Delivery Network (CDN) von Cloudflare Germany
				GmbH, Rosental 7, c/o Mindspace, 80331 München Deutschland (Cloudflare),
				um die Sicherheit und die Auslieferungsgeschwindigkeit unserer Website
				zu erhöhen. Dies entspricht unserem berechtigten Interesse (Art. 6 Abs.
				1 lit. f DSGVO). Ein CDN ist ein Netzwerk aus [weltweit] verteilten
				Servern, das in der Lage ist, optimiert Inhalte an den Websitenutzer
				auszuliefern. Für diesen Zweck können personenbezogene Daten in
				Server-Logfiles von Cloudflare verarbeitet werden. Bitte vergleichen Sie
				die Ausführungen unter „Hosting“.
				<br />
				<br />
				Cloudflare ist Empfänger Ihrer personenbezogenen Daten und als
				Auftragsverarbeiter für uns tätig. Die entspricht unserem berechtigten
				Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO, selbst kein
				Content Delivery Network zu betreiben.
				<br />
				<br />
				Sie haben das Recht der Verarbeitung zu widersprechen. Ob der
				Widerspruch erfolgreich ist, ist im Rahmen einer Interessenabwägung zu
				ermitteln.
				<br />
				<br />
				Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist weder
				gesetzlich noch vertraglich vorgeschrieben. Die Funktionsfähigkeit der
				Website ist ohne die Verarbeitung nicht gewährleistet.
				<br />
				<br />
				Ihre personenbezogenen Daten werden von Cloudflare so lange gespeichert,
				wie es für die beschriebenen Zwecke erforderlich ist.
				<br />
				<br />
				Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten
				gegenüber Cloudflare finden Sie unter:{' '}
				<a href="https://www.cloudflare.com/de-de/cloudflare-customer-dpa/">
					Cloudflare DPA
				</a>
				.<br />
				<br />
				Cloudflare hat Compliance-Maßnahmen für internationale
				Datenübermittlungen umgesetzt. Diese gelten für alle weltweiten
				Aktivitäten, bei denen Cloudflare personenbezogene Daten von natürlichen
				Personen in der EU verarbeitet. Diese Maßnahmen basieren auf den
				EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie{' '}
				<a href="https://www.cloudflare.com/cloudflare_customer_SCCs-German.pdf">
					hier
				</a>
				.
			</p>
		</Impressum>
	</Layout>
);

export default ImpressumComponent;
