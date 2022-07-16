import mongoose from "mongoose";
var Schema = mongoose.Schema;

var link = new Schema({
	url: {
		type: String,
		required: true,
	},
	short: {
		type: String,
		required: true,
	},
	views: {
		type: Number,
		default: 0,
	},
});

mongoose.models = {};

var Link = mongoose.model("Link", link);

export default Link;
