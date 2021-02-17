import {Cloudinary} from "cloudinary-core";

// Set config parameters while instantiating a new Cloudinary class
let cl = new Cloudinary({cloud_name:`${process.env.CLOUD_NAME}`, api_key:`${process.env.COMPRESS_KEY}`, api_secret:`${process.env.COMPRESS_SECRET}`, secure: true});

// Function to Compress image file type as Jpeg and optimized for web
export function imgCompress(url){
	const compressedImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", flags: "attachment"});
	return compressedImg;
}

// Function to add Effect Options for Users(i.e. instagram photo filters)
export function imgEffects(url, userInput){
	const effectedImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", effect:`${userInput}`, flags: "attachment"});
	return effectedImg;
}

// Function to blur all faces in photo
export function imgBlurFace(url) {
  const blurredImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", effect: "blur_faces:1000", flags: "attachment"});
  return blurredImg;
}

// Function to Compress video file type as Mp4 for web opitmization
export function vidCompress (url){
	const compressedVid = cl.video_url(`${url.public_id}.mp4`, {quality: "auto", flags: "attachment"});
	return compressedVid;
}