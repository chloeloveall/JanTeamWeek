/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {openWidget} from './js/compressAPI.js';
import {imgTransform, imgEffects, vidTransform} from './js/transform.js'


async function checkFileType(fileInfo){
	if((fileInfo.secure_url.match(/.mov|.mp4|.avi$/))){
		const video = await vidTransform(fileInfo);
		window.open(video);
		$("#transform").hide();
	} else if ((fileInfo.secure_url.match(/.jpe*g|.png|.gif|.svg$/))){
		const photo = await imgTransform(fileInfo);
		window.open(photo);
		$("#transform").hide();
	}
}

// Store HTML File Input in Variable
$(document).ready(function(){
	localStorage.clear();
	$("#widget").append("<script src ='https://widget.cloudinary.com/v2.0/global/all.js' type='text/javascript'></script>");
	$("#open-widget").on('click', async function(){
		await openWidget();
		$("#transform").delay(1000).fadeIn();
		//After widget is opened adds event listener to console log the value of resultInfo in local storage
		$("#transform").on('click', async function(){
			$("#form").show()
			let fileInfo;
			fileInfo = JSON.parse(localStorage.getItem('resultInfo'));
			checkFileType(fileInfo);
			console.log(fileInfo);
		});
	});
});