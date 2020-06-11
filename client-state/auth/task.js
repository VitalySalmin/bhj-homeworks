
let welcomeBlock = document.getElementById('welcome');
let loginFields = Array.from(document.getElementsByClassName('control'));
let signUpButton = document.getElementById('signin__btn');
let userId = document.getElementById('user_id');
let signOut = document.getElementById('signout__btn');
let idFromStorage = localStorage.getItem('userId')

signOut.style.display = 'none';

if(idFromStorage) {
	welcomeBlock.classList.add("welcome_active");
	userId.textContent = idFromStorage;
	loginFields.forEach( function(field){
						field.hidden = true;
	});
	console.log(signUpButton);
    signUpButton.style.display = 'none';
    signOut.style.display = 'block';    
}

signOut.addEventListener('click', () => {
      localStorage.removeItem('userId');
      loginFields.forEach( function(field){
	  field.hidden = false;
	  });
	  signUpButton.style.display = 'block';
	  signOut.style.display = 'none';
	  welcomeBlock.classList.remove("welcome_active");
	  loginFields.forEach( function(field){
						field.value = '';
	  });
 })

let message = document.getElementById('signin__form');
message.addEventListener('submit', (e) => {
	console.log("submitted")
	let formData = new FormData(message);
	let request= new XMLHttpRequest();



	request.open('POST','https://netology-slow-rest.herokuapp.com/auth.php');

	request.send(formData);
	e.preventDefault();

	request.onreadystatechange = function(){
		if(request.readyState===4) {
			let response = JSON.parse(request.responseText).success;

			if(response) {
				let id = JSON.parse(request.responseText).user_id;
				welcomeBlock.classList.add("welcome_active");
				userId.textContent = id;
				localStorage.setItem('userId', id) ;
				loginFields.forEach( function(field){
						field.hidden = true;
				});
			console.log(signUpButton);
              signUpButton.style.display = 'none';
              signOut.style.display = 'block';

			} else {
				localStorage.removeItem('userId');
				alert("Неверный логин/пароль");
				welcomeBlock.classList.remove("welcome_active");
				loginFields.forEach( function(field){
						field.value = '';
				});
			}
		}
		};
})	