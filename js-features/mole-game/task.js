
let miss = document.getElementById("lost");
let hit = document.getElementById("dead");

(() => {
    for (i = 1; i < 10; i++) {
        let currentHole = document.getElementById(`hole${i}`);
        currentHole.onclick = function() {
          if (currentHole.className.includes('hole_has-mole')) {
          hit.textContent++;
          console.log(stillPlaying);
          } else {
              miss.textContent++;
              console.log(stillPlaying);
          }
          if(Number(hit.textContent) >= 10) {
            stillPlaying = false;
            alert("Congrats! You won!");
            hit.textContent = 0;
            miss.textContent = 0;
            if (confirm("Play again?")) {
              stillPlaying = true;
              playing();
            } else {
                alert("ok, till next time. Reload the page if you decide to play");
            }     
          } else if(Number(miss.textContent) >= 5) {
            stillPlaying = false;
            alert("You lost! Game over!");
            hit.textContent = 0;
            miss.textContent = 0;
            if (confirm("Play again?")) {
              stillPlaying = true;
              playing();
            } else {
                alert("ok, till next time. Reload the page if you decide to play");
            }     
          }
        };
      }

})();