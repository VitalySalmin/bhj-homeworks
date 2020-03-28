const sizeButtons = document.querySelectorAll(".font-size")

Array.from(sizeButtons).forEach(function(button) {
	button.onclick = function(){
		let firstClass = "book_fs"; 
        let classes = document.getElementsByClassName("book__content")[0].className.split(" ").filter(function(book) { 
                return book.lastIndexOf(firstClass, 0) !== 0; 
            }); 
        document.getElementsByClassName("book__content")[0].className = classes.join(" ").trim(); 
		document.getElementsByClassName("font-size_active")[0].classList.remove('font-size_active')
		button.classList.add('font-size_active')
		if(button.dataset.size != undefined) {
			document.getElementsByClassName("book__content")[0].classList.add(`book_fs-${button.dataset.size}`)
		}
        return false
    }
	
})