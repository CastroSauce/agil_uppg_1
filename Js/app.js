function changePage(event){
    let animationDuration = .4;
    let nextPage = event.target.value;
    console.log(nextPage);

    if(nextPage != active){
    tl.to(active, animationDuration, {x : "100%"}); //remove the active page
    

    tl.to(nextPageSelector, animationDuration, {x : "0%"}, `-=${animationDuration}`); // bring in the new page

    active = nextPageSelector; // set the next page as active
    }
    
}

 var active = document.querySelector(".header");
 var btnWrapper = document.getElementById("button-wrapper");


 btnWrapper.addEventListener("click", changePage);

const tl = new TimelineMax(); 


