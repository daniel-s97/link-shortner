import { useRouter } from "next/router";
import LinkHandler from "../lib/viewHandler";

function Link({ url }) {
	const router = useRouter();
	const { link } = router.query;
	console.log(url);
	router.push(url);
	return (
		<div>
			<p>Short: {link}</p>
			<p>Link: {url}</p>
		</div>
	);
}

export async function getServerSideProps(context) {
	var { link } = context.query;
	var url = await LinkHandler(link);
	console.log(url);
	return {
		props: { url: url },
	};
}

export default Link;
