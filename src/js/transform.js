import {Cloudinary} from "cloudinary-core";

// Set config parameters while instantiating a new Cloudinary class
let cl = new Cloudinary({cloud_name:`${process.env.CLOUD_NAME}`, api_key:`${process.env.COMPRESS_KEY}`, api_secret:`${process.env.COMPRESS_SECRET}`, secure: true});

// Function to transform image file type as Jpeg and optimized for web
export function imgTransform(url){
	const compressedImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", flags: "attachment"});
	return compressedImg;
}

// Function to transform video file type as Mp4 for web opitmization
export function vidTransform (url){
	const compressedVid = cl.video_url(`${url.public_id}.mp4`, {quality: "auto", flags: "attachment"});
	return compressedVid;
}