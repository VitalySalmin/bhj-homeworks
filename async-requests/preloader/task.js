const showCurrency = document.getElementById("items")
const loader = document.getElementById("loader")
console.log(loader)

let xhr= new XMLHttpRequest();
console.log(xhr)
xhr.open('GET','https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		let response = JSON.parse(xhr.responseText)
		let listToSelectFrom = Object.entries(response.response.Valute);
		loader.style.display = "none"
		listToSelectFrom.forEach(function(entry) {
           showCurrency.innerHTML += `
             <div class="item__code">
                ${entry[1].CharCode}
            </div>
            <div class="item__value">
                ${entry[1].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
            <br>
           `
		})
	};
};