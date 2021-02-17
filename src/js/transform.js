/* eslint-disable */
import {Cloudinary} from "cloudinary-core";

// Set config parameters while instantiating a new Cloudinary class
let cl = new Cloudinary({cloud_name:`${process.env.CLOUD_NAME}`, api_key:`${process.env.COMPRESS_KEY}`, api_secret:`${process.env.COMPRESS_SECRET}`, secure: true});

// Function to Compress image file type as Jpeg and optimized for web
export function imgCompress(url){
	const compressedImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", flags: "attachment"});
	return compressedImg;
}

// Function to add Effect Options for Users(i.e. instagram photo filters) Attachment flag allows auto-download
export function imgEffects(url, userInput){
	const effectedImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", effect:`${userInput}`, flags: "attachment"});
	return effectedImg;
}

// Function to allow scaling and cropping of img's for user
export function imgScaling(url, uiWidth, uiHeight, uiCrop){
	const scaledImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", width:`${uiWidth}`, height:`${uiHeight}`, crop: `${uiCrop}`, flags: "attachment"});
	return scaledImg;
}

// Function to Compress video file type as Mp4 for web opitmization
export function vidCompress (url){
	const compressedVid = cl.video_url(`${url.public_id}.mp4`, {quality: "auto", flags: "attachment"});
	return compressedVid;
}

export function vidPreview(url){
	const previewedVid = cl.video_url(`${url.public_id}.mp4`, {transformation: [
		{width: 400, duration: "8", crop: "scale"},
		{overlay: new cloudinary.Layer().publicId(`${url.public_id}.mp4`), startOffset: "0", endOffset: "8"},
		{startOffset: "0", flags: ["layer_apply", "splice"], width: 400, crop: "scale"},
		{audioCodec: "none"}
  ]}).toHtml();
	return previewedVid;
}