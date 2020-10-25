
function changeActiveLink(event){
    let nextActive ="";
    
    if(event.target != undefined && event.target.length > 0){
        nextActive = event.target;
    }else{
        nextActive = event;
    }
  

    if( currentActiveLink != nextActive){

        currentActiveLink.classList.remove("active");

        nextActive.classList.add("active")

        currentActiveLink = nextActive;
    }

    

    
   
}


function changeActiveNav(event){

    let filteredList = elements.filter(el => el.getBoundingClientRect().top > -50 && el.getBoundingClientRect().top < 50)
    let nextSection = filteredList[0];

        if(nextSection != undefined && currentSection != nextSection){
  
            currentSection = nextSection;
           
            nextActiveLink = document.getElementsByName(currentSection.id)[0];
            changeActiveLink(nextActiveLink);
        }
    

    

}


      


var list = document.getElementsByClassName("section"); // Do not use a period here!
var elements = Array.prototype.map.call(list, el => el);


var currentActiveLink = document.getElementById("firstLink"); 
var currentSection = document.getElementById("start");
const linkWrapper = document.getElementById("linkWrapper");
linkWrapper.addEventListener("click", changeActiveLink);
window.addEventListener("scroll",changeActiveNav);