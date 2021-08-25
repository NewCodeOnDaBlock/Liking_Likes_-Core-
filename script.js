/* --------------- Individual Likes Strategy -----------------*/

let clickedLike = true;

function updateLikes(id){

    const likeCounter = parseInt(document.querySelector(id).innerText);

    if(clickedLike){

        document.querySelector(id).innerText = likeCounter+1 +' '+ "Like(s)";
    }
}

/*------------------------ Shadow Hover Effedt -----------------------*/


function shadowMove(element){

    element.classList.add("shadow-effect");

}

function shadowOut(element){

    element.classList.remove("shadow-effect");
}

/* ------------------------ Story Functions -----------------------------*/



function shadowMovePlay(element){

    if(hoveredStory){

        element.play(element);
        element.classList.add("shadow-effect");
        video.muted = true;        
    }
    shadowMovePause(element);
}

function shadowOutPause (element){

    if(hoveredStory){

        element.pause(element);
        element.classList.remove("shadow-effect");
    
    }

    shadowOutPause(element);

}

