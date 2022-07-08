import { useRouter } from "next/router";

export default function Link() {
	const router = useRouter();
	const { link } = router.query;

	return (
		<div>
			<p>Link {link}</p>
		</div>
	);
}
