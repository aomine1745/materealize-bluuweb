 document.addEventListener('DOMContentLoaded', function() {
 	M.AutoInit();
 	//Fixed Action Buttom
 	var elems = document.querySelectorAll('.fixed-action-btn');
 	var instances = M.FloatingActionButton.init(elems, {
 		direction: 'buttom',
 		hoverEnabled: true,
 		toolbarEnabled: false
 	});
 	//Carousel
 	var elems = document.querySelectorAll('.carousel-slider');
 	var instances = M.Carousel.init(elems, {
 		fullWidth: true,
 		indicators: true
 	});
 	//Slider
 	var elems = document.querySelectorAll('.slider');
 	var instances = M.Slider.init(elems, {
 		height: 500
 	});
 	//Scrollspy
 	var elems = document.querySelectorAll('.scrollspy');
 	var instances = M.ScrollSpy.init(elems, {
 		scrollOffset: 0
 	});
 });

//Toasts
function toast1(){
	M.toast({
		html: "pto el que lo lea >:v",
		displayLength: 1000,
		classes: "blue lighten-2",
 		//completeCallback: function(){alert('Nope')}
 	});
};
