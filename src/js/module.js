const close = document.getElementById('alert-popup')
const back = document.getElementById('tint-background')
const displayClicks = document.getElementById('displayclicks')
const moreclicks = document.getElementById('moreclicks')
var userclicks =0
userclicks = localStorage.getItem('userclicks')


function showPopup(){
  close.style.display = "block"
  back.style.display = "block"
  countClicks()
  updateClicks()
  checkNumberOfClicks()
}
function closePopup(){  
  close.style.display = "none"
  back.style.display = "none"
}
back.addEventListener("click", ()=> {
  closePopup()
})
function countClicks(){ 
  userclicks++
  saveClicks()
}
function saveClicks(){  
  localStorage.setItem('userclicks', userclicks)
}
function updateClicks(){
  displayClicks.innerHTML = `${userclicks} times`
}
function checkNumberOfClicks(){
  let clicks = localStorage.getItem('userclicks', userclicks)
  if(clicks > 5) moreclicks.style.display = "block"
}
function resetClicks(){
  localStorage.removeItem('userclicks');
  userclicks =0
  moreclicks.style.display = "none"
  updateClicks()
}
