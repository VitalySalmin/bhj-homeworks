const ads = document.querySelectorAll(".rotator__case")


setInterval(function changeAd() {
	console.log("started")
	for (var i = 0; i < ads.length; i++) {
		let ad = ads[i]
        
    if(ad.classList.contains("rotator__case_active")) {
   	    console.log(ad.classList)
        ad.classList.remove("rotator__case_active")
        if(Array.from(ads).indexOf(ad) < (ads.length - 1)) {
        	console.log(Array.from(ads).indexOf(ad))
        	if(ad.textContent.includes('вру')) {
        	document.getElementById("me").hidden = true
        } else {
        	document.getElementById("me").hidden = false
        };
        	ads[(Array.from(ads).indexOf(ad) + 1)].classList.add("rotator__case_active")
        	ads[(Array.from(ads).indexOf(ad) + 1)].style.color = ads[(Array.from(ads).indexOf(ad) + 1)].dataset.color
        	break
        } else {
        	if(ad.textContent.includes('вру')) {
        	document.getElementById("me").hidden = true
        } else {
        	document.getElementById("me").hidden = false
        };;
        	ads[0].classList.add("rotator__case_active")
        	ads[0].style.color = ads[0].dataset.color
        	break
        }
      }
  };
}, 5000);