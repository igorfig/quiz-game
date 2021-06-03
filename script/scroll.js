function scrollToUp() {
    setTimeout(() => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }, 500 );
}

function scrollToDown(){
   setTimeout(() => {
    window.scrollTo({ 
        left: 0, 
        top: document.body.scrollHeight, 
        behavior: "smooth" 
    });
   }, 1500);
 }
 
window.addEventListener("load", scrollToDown)

const buttons = document.querySelectorAll(".back-to-top");
buttons.forEach(button => {
  button.addEventListener("click", scrollToUp);
})