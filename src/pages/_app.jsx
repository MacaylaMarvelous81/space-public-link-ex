import Header from "@/components/header";

import "@/styles/global.css";

export default function app({ Component, ...pageProps }) {
	return (
		<div className="container">
			<Header />
			<Component { ...pageProps } />
		</div>
	);
}
