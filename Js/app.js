
function changeActiveLink(event){
    let nextActive = undefined;

    nextActive = event;

   

    if( currentActiveLink != nextActive){

        currentActiveLink.classList.remove("active");

        nextActive.classList.add("active")

        currentActiveLink = nextActive;
    }

    

    
   
}


function changeActiveNav(event){

    let filteredList = elements.filter(el => el.getBoundingClientRect().top > -120 && el.getBoundingClientRect().top < 120)
    let nextSection = filteredList[0];

        if(nextSection != undefined && currentSection != nextSection){
  
            currentSection = nextSection;
           
            nextActiveLink = document.getElementsByName(currentSection.id)[0];
            changeActiveLink(nextActiveLink);
        }

        
       


        if(window.scrollY > 40 && !navbar.classList.contains("nav-solid")){

            navbar.classList.remove("nav-transparent");
            navbar.classList.add("nav-solid");

        }else if(window.scrollY < 40 && !navbar.classList.contains("nav-transparent")){

            console.log("removing");
            navbar.classList.remove("nav-solid");
            navbar.classList.add("nav-transparent");

        }
    

    

}


      


var list = document.getElementsByClassName("section"); // Do not use a period here!
var elements = Array.prototype.map.call(list, el => el);
var navbar = document.getElementById("nav");

var currentActiveLink = document.getElementById("firstLink"); 
var currentSection = document.getElementById("start");

window.addEventListener("scroll",changeActiveNav);