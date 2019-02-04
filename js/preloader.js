window.addEventListener('load', () => {
	setTimeout(loading, 2000);	

	loading();
	function loading(){
		var content = document.getElementById('contents');
		content.classList.remove('hide');
		content.classList.add('center', 'animated', 'fadeInDown');
		var spinner = document.querySelector('#spinner');
		spinner.classList.add('hide');
	}
});