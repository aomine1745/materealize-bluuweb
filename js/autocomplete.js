document.addEventListener('DOMContentLoaded', function() {
	const response = document.querySelector('#response');
	var elems = document.querySelectorAll('.autocomplete');
	var instances = M.Autocomplete.init(elems, {
		data: {
			'Apple': null,
			'Microsoft': null,
			'Html': null,
			'Css': null,
			'JavaScript': null,
			'Angular': null,
			'aomine': null,
			'kurumi': null
		},
		onAutocomplete: function(text){
			switch(text){
				case 'aomine':
				response.innerHTML = `<h3>THE GOD <span class="blue-text">${text}!!!!</span></h3>`;
				break;
				case 'kurumi':
				response.innerHTML = `<h3>THE BEST WAIFU <span class="red-text">${text}!!!! ♥</span></h3>`;
				break;
				default:
				response.innerHTML = `<h3>Diste click a: <span class="purple-text">${text}</span></h3>`;
				break;
			}
		}
	});
});

