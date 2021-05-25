const title = document.getElementsByClassName('js-title')[0];
title.style.cursor = "pointer"
function colorChanger(){
    title.classList.toggle("colors")
    
}

title.addEventListener("click",colorChanger)