import mongoose from "mongoose";
import Link from "./models/link";

async function LinkHandler(id) {
	// See if given short is a valid link
	var find = await Link.find({ short: id });
	if (find.length !== 0) {
		// Found update view counter and send link
		var link = await Link.findOneAndUpdate(
			{
				short: id,
			},
			{
				$inc: { views: 1 },
			},
			{ new: true }
		);
		return find[0].url;
	} else {
		// Not found send back to home page
		return "/";
	}

	/*
	
    */
}

export default LinkHandler;
