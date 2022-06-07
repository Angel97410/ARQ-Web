if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
	});
}

document.addEventListener('DOMContentLoaded', function () {
	AOS.init();
}, false);
// récupérer données

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

// formulaire de Contact
function validateForm(){

}