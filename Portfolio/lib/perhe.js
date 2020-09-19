let nimi = document.getElementById('nimi');
let rotu = document.getElementById('rotu');
let ika = document.getElementById('ika');

$('#minunKortti').on('click', function() {
	$('#minunKortti img').remove();
	$(this).html('<img src="/img/jarmoKortissa.png" alt="">');
	$('#silpunKortti img').remove();
	$('#silpunKortti').html('<img src="img/korttSilppui.png" alt="">');
	kutsuMut();
});
$('#silpunKortti').on('click', function() {
	$('#silpunKortti img').remove();
	$(this).html('<img src="/img/silppuKortissa.png" alt="">');
	$('#minunKortti img').remove();
	$('#minunKortti').html('<img  src="/img/kortti.png" alt="">');
	kutsuSilppu();
});
function kutsuSilppu() {
	var kenenNimi = new Typed(nimi, {
		fadeOut: true,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,
		strings: [ 'silppuri' ],
		typeSpeed: 80
	});
	var kenenRotu = new Typed(rotu, {
		fadeOut: true,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,
		strings: [ 'false' ],
		typeSpeed: 80
	});
	var kenenIka = new Typed(ika, {
		fadeOut: true,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,
		strings: [ '1' ],
		typeSpeed: 80
	});
}
function kutsuMut() {
	var kenenNimi = new Typed(nimi, {
		fadeOut: true,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,
		strings: [ 'Jarmo Lindström' ],
		typeSpeed: 80
	});
	var kenenRotu = new Typed(rotu, {
		fadeOut: true,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,
		strings: [ 'True' ],
		typeSpeed: 80
	});
	var kenenIka = new Typed(ika, {
		fadeOut: true,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,
		strings: [ '48' ],
		typeSpeed: 80
	});
}
