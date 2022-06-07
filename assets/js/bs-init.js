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


// formulaire de Contact

const nodemailer = require("nodemailer");
nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "robert.angelique@outlook.com",
    pass: "Angel97410",
  },
});

let transporter = nodemailer.createTransport(transport[ defaults])
let poolConfig = "smtps://robert.angelique@outlook.com:Angel97410@smtp-mail.outlook.com/?pool=true";

var message = {
  from: document.getElementsByClassName('email'),
  to: "robert.angelique@hotmail.fr",
  subject: "Contact ARQ-Web",
  text: document.getElementsByClassName('message'),
  html: "<p>"+text+"</p>"
};