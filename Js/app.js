
function changeActiveLink(event){

    console.log(event);
    let nextActive = event.target;
   


    if( currentActive != nextActive){

        currentActive.classList.remove("active");

        nextActive.classList.add("active")

        currentActive = nextActive;
    }

    

    
   
}


function changeActiveNav(event){

    if(window.hash != currentActive.hash){
        console.log("not on same");
        changeActiveLink(document.getElementById(window.location.hash.substring(1)));
        
    }

    

}


      




var currentActive = document.getElementById("firstLink"); 
const linkWrapper = document.getElementById("linkWrapper");
linkWrapper.addEventListener("click", changeActiveLink);
window.addEventListener("scroll",changeActiveNav);