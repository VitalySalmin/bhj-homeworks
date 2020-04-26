const question = document.getElementById("poll__title")
const answers = document.getElementById("poll__answers")

let xhr= new XMLHttpRequest();
console.log(xhr)
xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		let response = JSON.parse(xhr.responseText)
		console.log(response)
		
		question.innerHTML += `
        ${response.data.title}
		`
		let possibleAnswers = ``
		response.data.answers.forEach(function(answer) {
			answers.innerHTML += `
              <button class="poll__answer" onclick="alert('Спасибо, ваш голос засчитан!')">
                ${answer}
              </button>
           `
		})
	}
}		