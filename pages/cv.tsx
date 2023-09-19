import router from "next/router";
import { useEffect } from "react";

const CV = () => {
	useEffect(() => {
		void router.push("/");
	});
	return null;
};

export default CV;
