import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";

const MeetFrame = styled.iframe`
	flex: 1;
	padding-bottom: 20px;
`;

const Meet = () => (
	<Layout backgroundColor="#111111" disableBackground>
		<MeetFrame src="https://app.cal.com/henrygressmann/meeting" frameBorder="0" allowFullScreen={false} />
	</Layout>
);

export default Meet;
