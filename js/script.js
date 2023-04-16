let slideWrap = document.querySelector('.slider-wrapper');
var hammertime = new Hammer(slideWrap);
hammertime.on('pan', function(ev) {
	myElement.textContent = ev.type +" gesture detected.";
});