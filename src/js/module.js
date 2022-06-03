const close = document.getElementById('alert-popup')
const back = document.getElementById('tint-background')
const displayClicks = document.getElementById('displayclicks')
var userclicks = 0

function closePopup(){  
  close.style.display = "none";
  back.style.display = "none";
}
function showPopup(){
  close.style.display = "block";
  back.style.display = "block";
  countClicks()
}

back.addEventListener("click", ()=> {
  closePopup()
})

function countClicks(){
  userclicks++
}