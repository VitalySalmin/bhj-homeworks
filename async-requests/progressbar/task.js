//let xhr = new XMLHttpRequest();
//xhr.open('GET','https://netology-slow-rest.herokuapp.com/upload.php');
//xhr.send();

let message = document.getElementById('form');
message.addEventListener('submit', (e) => {
	console.log("submitted")
	let formData = new FormData(message);
	let request= new XMLHttpRequest();
	/*request.upload.onprogress = function(event) {
    console.log(event.loaded + ' / ' + event.total);  
    }*/
    request.onprogress = function(event) {
    console.log( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
    }

/* Я пробовал по-разному, но единственный способ отслеживать прогресс ответа сервера то, что я использовал выше 
и всегда я получаю ответ типа "Получено с сервера 47197514 байт из 0" - я не знаю почему так и что сделать, чтобы правильно увидеть полный размер ответа, 
я, разумеется, могу увидеть вконце кол-во байт, но если я использую его, то решение не будет универсальным (только для одного этого ответа будет верным)*/

	request.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');
	request.addEventListener('readystatechange', function() {
	
		//console.log(request.readyState)
		//console.log(request.status)
		//console.log(request.statusText)
		//console.log(request.upload)

		/*var data = request.responseText;
		var output='<ul>';
		for(var key in data){
			output += '<li><b>' + key + "</b>: " + data[key] + '</li>';
		}
		output +='</ul>';
		document.getElementsByTagName('body')[0].innerHTML = output;*/
	})
	request.send(formData);
	e.preventDefault();
})	
