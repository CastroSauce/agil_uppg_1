
function changeActiveLink(event){

    console.log(event);
    let nextActive = event.target;

    if( currentActive != nextActive){

        currentActive.classList.remove("active");

        nextActive.classList.add("active")

        currentActive = nextActive;
    }
    

}



var currentActive = document.getElementById("firstLink"); 
const linkWrapper = document.getElementById("linkWrapper");
linkWrapper.addEventListener("click", changeActiveLink);