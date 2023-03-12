import Link from "next/link";

import styles from "@/styles/header.module.css";

export default function Header() {
	return (
		<header className={ styles.header }>
			<nav className={ styles.navigation }>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/conf">Secret</Link>
			</nav>
		</header>
	);
}
