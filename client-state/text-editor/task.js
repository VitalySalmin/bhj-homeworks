	const editor = document.getElementById("editor");
	const eraser = document.getElementById("erase");
    editor.value = localStorage.textarea;

	editor.addEventListener("input", function() {
		localStorage.textarea = editor.value;
	});

	eraser.addEventListener("click", function(){
      if (window.confirm("Это если что значит все безвозвратно удалить. Удаляем?")) { 
        localStorage.textarea = "";
        editor.value= "";
      }
	})