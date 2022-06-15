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
let email = document.querySelector("#email");
const message = document.querySelector("#message");

// Jquery dynamisation navbar active
$(() => {
	$('li .nav-link').click(function(){

		$('li .nav-link').each(function(){
			$(this).removeClass('active');
		})
		$(this).addClass('active');
	})
})