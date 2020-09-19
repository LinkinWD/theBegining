function randomValues() {
	anime({
		targets: '.pallo',

		translateX: function() {
			return anime.random(-40, 40) + 'vw';
		},
		translateY: function() {
			return anime.random(-40, 40) + 'vh';
		},
		scale: function() {
			return anime.random(10, 30) / 10;
		},
		background: function() {
			let R = anime.random(0, 255);
			let G = anime.random(0, 255);
			let B = anime.random(0, 255);
			let vari = `rgb(${R},${G},${B})`;
			return vari;
		},
		easing: 'easeInOutQuad',
		duration: 750,
		complete: randomValues
	});
}

randomValues();
