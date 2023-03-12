import Link from "next/link";

export default function conf() {
	return (
		<main>
			<h1>HEY!!!</h1>
			<p>What do you think you're doing in this <span className="bold">top-secret</span> page?! Get out!</p>
			<Link href="/">OK! Escape</Link>
		</main>
	);
}
