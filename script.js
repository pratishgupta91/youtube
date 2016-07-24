var images = [];
var maxImageArea = 0;
var imageUrl;
for(var i = 0; i < document.images.length; i++){
	var imageArea = document.images[i].width * document.images[i].height;
	if(imageArea > maxImageArea) {
		//alert(imageArea);
		maxImageArea = imageArea;
		imageUrl = document.images[i].src;
	}
}
chrome.runtime.sendMessage({method:"downloadImages", imageUrl:imageUrl});
//alert("here");