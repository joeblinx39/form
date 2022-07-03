function openForm(){
    document.getElementById("form").style.display = "block";
}
function closeForm(){
    document.getElementById("form").style.display ="none";
}
function hide(){
    document.getElementById("details").style.display ="none";
}

const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	const userName = form['username'].value;
	const phone = form['telephone'].value;
	const email = form['email'].value;
	const password = form['password'].value;
	const confirmPassword = form['confirmPassword'].value;

	if (userName === '') {
		addErrorTo('username', 'User Name cannot be empty');
	} else {
		removeErrorFrom('username');
	}

	if (phone === '') {
		addErrorTo('telephone', 'Telephone cannot be empty');
	} else {
		removeErrorFrom('telephone');
	}

	if (email === '') {
		addErrorTo('email', 'Email cannot be empty');
	} else if (!isValid(email)) {
		addErrorTo('email', 'Looks like this is not an email');
	} else {
		removeErrorFrom('email');
	}

	if (password === '') {
		addErrorTo('password', 'Password cannot be empty');
	} else {
		removeErrorFrom('password');
	}
	if (confirmPassword !== password) {
		addErrorTo('confirmPassword', 'Password does not match');
	} else {
		removeErrorFrom('confirmPassword');
	}
	
});

function addErrorTo(field, message) {
	const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = message;
}

function removeErrorFrom(field) {
	const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}

function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
function displayDetails(){
	const username = form['username'].value;
	const phone = form['telephone'].value;
	const email = form['email'].value;

	document.getElementById("details").style.display ="block";
	document.getElementById('user').innerHTML='Username: '+username;
	document.getElementById('tel').innerHTML='Telephone: '+phone;
	document.getElementById('emailadd').innerHTML='Email: '+email;
	}
