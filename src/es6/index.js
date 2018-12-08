class Contact{
	constructor(formId){
		this.url = 'https://formspree.io/contact@sujeetjaiswal.com';
	}
	sendReq(formElements){
		let xhttp;
		if (window.XMLHttpRequest) {
		    xhttp = new XMLHttpRequest();
		    } else {
		    // code for IE6, IE5
		    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				document.getElementById('contactForm').style.display = 'none';
				document.getElementById("contactThanks").style.display = 'block';
			}
		};
		xhttp.open("POST", this.url, true);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.setRequestHeader("Accept", "application/json");
		xhttp.send(JSON.stringify({
			'name':formElements.name.value,
			'_replyto':formElements._replyto.value,
			'_subject':'New Form submission',
			'_cc':'er.sujeetkumarjaiswal@gmail.com',
			'message':formElements.content.value
		}));		
	}
}

const contact = new Contact('contactForm');
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit',function(event){
	event.preventDefault();
	console.log('form submitted',contactForm.elements);
	contact.sendReq(contactForm.elements);
	//event.preventDefault();
	return false;
})