// Wrap every letter in a span
var textWrapper = document.querySelector('.portfolio .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false }).add({
	targets: '.portfolio .letter',
	scale: [ 0, 1 ],
	duration: 1500,
	elasticity: 600,
	delay: (el, i) => 45 * (i + 20)
});

anime({
	targets: '.handPointer',
	keyframes: [ { translateY: 30 }, { translateY: 0 }, { translateY: -10 }, { translateY: 0 } ],
	duration: 1000,
	easing: 'linear',
	delay: 5000,
	loop: true
});
