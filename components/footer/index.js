import styles from "../../styles/footer.module.css";
import Link from "next/link";
export default function Footer() {
	return (
		<div className={styles.footer}>
			<p>
				Made by{" "}
				<Link href="https://github.com/daniel-sockness">
					<span className={styles.name}>Daniel Sockness</span>
				</Link>{" "}
			</p>
		</div>
	);
}
