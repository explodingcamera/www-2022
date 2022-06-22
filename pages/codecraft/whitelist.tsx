import React from 'react';
import Layout from '../../components/layout';

const Whitelist = () => (
	<Layout
		disableHeader
		backgroundColor="linear-gradient(45deg, #07070b, #1155ff63)"
	>
		<iframe
			src="https://docs.google.com/forms/d/e/1FAIpQLSfG78epWmNmg89DmBWg_ysb1etW2DCPdu2Fw1C_-1Fa15Klzw/viewform?embedded=true"
			width="100%"
			height="10000rem"
			frameBorder="0"
			sandbox=""
		>
			Wird geladen…
		</iframe>
	</Layout>
);

Whitelist.disableBackground = true;

export default Whitelist;
