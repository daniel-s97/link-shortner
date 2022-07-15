import Footer from "../footer";
import Navbar from "../navbar";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className="content">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
