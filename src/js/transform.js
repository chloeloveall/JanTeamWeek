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


// Function to allow scaling of img's for user
export function imgScaling(url, uiWidth, uiHeight){
	const scaledImg = cl.url(`${url.public_id}.jpg`, {quality: "auto", width:`${uiWidth}`, height:`${uiHeight}`, crop: "scale", flags: "attachment"});
	return scaledImg;
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


// Function to allow scaling of video's for user
export function vidScaling(url, uiWidth, uiHeight){
	const scaledVid = cl.video_url(`${url.public_id}.mp4`, {quality: "auto", width:`${uiWidth}`, height:`${uiHeight}`, crop: "scale", flags: "attachment"});
	return scaledVid;


// Function to add slow motion effect to video from local storage
export function vidSloMo(url) {
  const slowMoVid = cl.video_url(`${url.public_id}.mp4`, {quality: "auto", effect: "accelerate:-50", flags: "attachment"});
  return slowMoVid;

}

export function vidToGif(url) {
  const gif = cl.video_url(`${url.public_id}.gif`, {videoSampling: "40", delay: "200", height: 200, effect: "loop", crop: "scale", quality: "auto", flags: "attachment"});
  return gif;

