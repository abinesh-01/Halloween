let searchBox = document.querySelector(".search-box");

function hidebtn () {
  searchBox.classList.toggle("hide")
}

let menuBtn = document.querySelector("#menu-btn");
let sideBtn = document.querySelector(".side-nav");
  menuBtn.addEventListener('click',function(){
    
     sideBtn.classList.toggle("is-active")
  })
    
