import {Cloudinary} from "cloudinary-core";

// Set config parameters while instantiating a new Cloudinary class
let cl = new Cloudinary({cloud_name:`${process.env.CLOUD_NAME}`, api_key:`${process.env.COMPRESS_KEY}`, api_secret:`${process.env.COMPRESS_SECRET}`, secure: true});

// Function to transform image file type as Jpeg and optimized for web
export function imgTransform(url){
	const compressedImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", flags: "attachment"});
	return compressedImg;
}

// Function to add Trasformation Element Options for Users
function imgTransformation(url, uiWidth, uiHeight){
	const transImg = cl.url(`${url.public_id}.jpg`, {flags: "attachment", transformation: [
		{width: `${uiWidth}`, height: `${uiHeight}`}
	]});
	return transImg;
}

// Function to add Effect Options for Users(i.e. instagram photo filters)
export function imgEffects(url, userInput){
	const effectedImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", effect: `${userInput}`, flags: "attachment"});
	return effectedImg;
}

// Function to transform video file type as Mp4 for web opitmization
export function vidTransform (url){
	const compressedVid = cl.video_url(`${url.public_id}.mp4`, {quality: "auto", flags: "attachment"});
	return compressedVid;
}