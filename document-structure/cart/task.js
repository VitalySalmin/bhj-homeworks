const increase = document.querySelectorAll(".product__quantity-control_inc")
const decrease = document.querySelectorAll(".product__quantity-control_dec")
const bin = document.querySelector(".cart__products")
const addToBin = document.querySelectorAll(".product__add")

Array.from(increase).forEach(function(plus) {
  plus.addEventListener("click", function(){
    let quantity = plus.parentElement.querySelector(".product__quantity-value")
    quantity.textContent = Number(quantity.textContent) + 1
  })
})

Array.from(decrease).forEach(function(minus) {
  minus.addEventListener("click", function(){
    let quantity = minus.parentElement.querySelector(".product__quantity-value")
    if (Number(quantity.textContent) >= 1) {
    	quantity.textContent = Number(quantity.textContent) - 1
    }	
  })
})


Array.from(addToBin).forEach(function(add) {
  add.addEventListener("click", function(){
  console.log("trying to add")
  let product = add.parentElement.parentElement.parentElement
  let id = (product.dataset.id)
  let quantity = product.querySelector(".product__quantity-value").textContent
  let img = product.querySelector(".product__image").src
  let alreadyPresent = false
  let itemToPut
  console.log()
  Array.from(bin.querySelectorAll('[data-id]')).forEach(function(item) {
  		console.log(item)
  		if(item.dataset.id == id) {
  			alreadyPresent = true
  			itemToPut = item
  			console.log(item.querySelector('.cart__product-count').textContent)
  		} 
  })		
  if(Number(quantity) >= 1 && alreadyPresent) {

  	itemToPut.querySelector('.cart__product-count').textContent = Number(quantity) + Number(itemToPut.querySelector('.cart__product-count').textContent)
  	
  } else {
  			bin.innerHTML += `
              <div class="cart__product" data-id=${id}>
                <img class="cart__product-image" src=${img}>
                <div class="cart__product-count">${Number(quantity)}</div>
              </div>
            `  
  		
  	}
  })
  
})
 	