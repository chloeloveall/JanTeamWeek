/* eslint-disable */
// Function to open widget to upload file to cloudinary, returns file url
export function openWidget(){
	let myWidget = cloudinary.createUploadWidget({
		cloudName:`${process.env.CLOUD_NAME}`,
		uploadPreset: `${process.env.UPLOAD_PRESET}`
	}, (error, result) => {
		if(!error && result && result.event === "success"){
			console.log('Done! Here is the image info: ', result.info);
			localStorage.setItem('resultInfo', JSON.stringify(result.info));
		}
	});
	myWidget.open();
	console.log(myWidget)
}