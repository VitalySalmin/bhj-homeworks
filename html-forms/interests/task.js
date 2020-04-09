const interests = document.querySelectorAll(".interest__check")


Array.from(interests).forEach(function(interest){
  interest.addEventListener('change', function() {
  	if(!(interest.parentElement.parentElement.parentElement.classList.contains('interests'))) {
	    //console.log(interest.parentElement.children)
		let subInterests = interest.parentElement.parentElement.children[Array.from(interest.parentElement.parentElement.children).indexOf(interest.parentElement) + 1].querySelectorAll(".interest__check")
		console.log(subInterests)
		Array.from(subInterests).forEach(function(subInterest){
  		  subInterest.checked = interest.checked
        })
	}
  	
  })
})