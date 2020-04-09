const interests = document.querySelectorAll(".interest__check")

Array.from(interests).forEach(function(interest){
  let subInterests = interest.querySelectorAll(".interest__check")
  console.log(subInterests)
  interest.addEventListener('change', function() {
  	Array.from(subInterests).forEach(function(subInterest){
  		console.log(interest.checked)
    subInterest.checked = interest.checked
  })
  })
})