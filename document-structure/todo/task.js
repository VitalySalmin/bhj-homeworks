

document.getElementById("tasks__list").innerHTML = localStorage.getItem('list')


const add = document.getElementById("tasks__add")
const list = document.getElementById("tasks__list")
const input = document.getElementById('task__input')
let tasks = list.getElementsByClassName("task")
let itemsToRemove = document.querySelectorAll(".task__remove")


add.addEventListener("click", function(event){
	event.preventDefault()
    list.innerHTML += `
      <div class="task">
              <div class="task__title">
                ${input.value}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>
    `

    localStorage.setItem('list', `${list.innerHTML}`)
    input.value = ""   

    Array.from(document.getElementsByClassName("task__remove")).forEach(function(item) {
      item.addEventListener("click", function(event){
  	    event.preventDefault()
  	    list.removeChild(tasks[Array.from(tasks).indexOf(item.parentElement)])
  	    localStorage.setItem('list', `${list.innerHTML}`)
  	          
    })
  })
});


Array.from(document.getElementsByClassName("task__remove")).forEach(function(item) {
  item.addEventListener("click", function(event){
  	event.preventDefault()
  	list.removeChild(tasks[Array.from(tasks).indexOf(item.parentElement)])
  	localStorage.setItem('list', `${list.innerHTML}`)
  	          
  })
})