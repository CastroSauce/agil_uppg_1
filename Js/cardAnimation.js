
function getContainerWithClass(containerClass, element){ // searches all parents from element to find a container with containerClass

    let parent = element.offsetParent;
    
    while(parent!= undefined){ // if there still is a parent continue testing

        if(parent.classList.contains(containerClass)){
            return parent;
        }
        parent = parent.offsetParent; // move to the next parent
    }
    return undefined;

}


function changeCardState(event){



    const card = getContainerWithClass("card", event.target); // get the 2nd parent which should be the card

    if(card != undefined){ // check if the element contains a card class
    
    
        card.classList.contains("flipped") ? card.classList.remove("flipped") : card.classList.add("flipped"); //if card contains flipped remove flipped class else add flipped class

    }

}

const cardContainer = document.getElementById("card-container");
cardContainer.addEventListener("click", changeCardState);