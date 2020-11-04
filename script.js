const a = document.querySelector('form');

a.addEventListener('submit',  e => {
	e.preventDefault();
	console.log('test');
})