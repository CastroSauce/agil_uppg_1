function applyBlur(){
    console.log("wow");
}

function startToPage(animationDuration, page1 = active, page2 = nextPage){

    page2.classList.remove("not-active");

    tl.to("li",10, {filter: "blur(6px)",});

    
    active = page2;
}

function pageToStart(animationDuration, page1 = active, page2 = nextPage){

}

function pageToPage(animationDuration, page1 = active, page2 = nextPage){

        
    page2.classList.remove("not-active");

    tl.to(page1, animationDuration, {x : "100%", ease: Power2.easeInOut}); //remove the active page

    tl.to(page2, animationDuration, {x : "0%", ease: Power2.easeInOut}, `-=${animationDuration}`); // bring in the new page


    console.log(page1);
  
    active = page2; // set the next page as active

}


function changePage(event){
    console.log(event)
    document.getElementById("p1").classList.add("btn");
    let Duration = 1;
    nextPage = document.querySelector(event.target.value);
    console.log(nextPage);

    if(nextPage != active){

        startToPage(Duration);

    }
    
}

 var active = document.querySelector(".header");
 var nextPage = undefined;
 var btnWrapper = document.getElementById("button-wrapper");
 const tl = new TimelineMax(); 

 btnWrapper.addEventListener("click", changePage);




