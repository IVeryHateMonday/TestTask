let link =  document.querySelectorAll("a")
let form = document.querySelector("#form")

function handleButtonClick(event) {
    event.preventDefault();
    form.scrollIntoView({ block: "center", behavior: "smooth" });
   
  }
for(let i=0; i< link.length; ++i){
    link[i].addEventListener("click", handleButtonClick);
    
}

