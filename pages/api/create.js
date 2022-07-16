// Create api function
import connectDB from "../../lib/dbConnect";
import Link from "../../lib/models/link";

async function handler(req, res) {
	// Check our method
	var { method } = req;
	if (method === "POST") {
		// Store our short for db
		var short = makeid(5);
		var url = req.body.url;
		// Store Link in DB
		var link = new Link({
			url,
			short,
		});
		// Create new link
		var linkCreated = await link.save();
		console.log(linkCreated);
		return res.json({
			short,
		});
	} else {
		// If Anything other than POST return 400
		res.status(400).send("Invalid Method");
	}
}
// Short generator function
function makeid(length) {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export default connectDB(handler);
