import styles from "../styles/home.module.css";
export default function Home() {
	return (
		<div className={styles.container}>
			<p>Enter a URL to shorten the URL</p>
			<div className={styles.inputForm}>
				<input placeholder=" " />
				<label>URL</label>
			</div>
		</div>
	);
}
