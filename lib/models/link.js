import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
	link: String,
	views: {
		type: String,
		default: 0,
	},
});

module.exports = mongoose.models.Link || mongoose.model("Link", LinkSchema);
