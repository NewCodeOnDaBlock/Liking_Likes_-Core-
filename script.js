var firstPostcount = 0; 
var secondPostcount = 0;
var thirdPostcount = 0;
var fourthPostcount = 0;
var fifthPostcount = 0;
var sixthPostcount = 0; 
var seventhPostcount = 0;
var eigthPostcount = 0;
var ninethPostcount = 0;
var tenthPostcount = 0;
var feedLikes1 = document.querySelector(".like-btn1");
var feedLikes2 = document.querySelector(".like-btn2");
var feedLikes3 = document.querySelector(".like-btn3");
var feedLikes4 = document.querySelector(".like-btn4");
var feedLikes5 = document.querySelector(".like-btn5");
var feedLikes6 = document.querySelector(".like-btn6");
var feedLikes7 = document.querySelector(".like-btn7");
var feedLikes8 = document.querySelector(".like-btn8");
var feedLikes9 = document.querySelector(".like-btn9");
var feedLikes10 = document.querySelector(".like-btn10");
var firstPost = document.querySelector(".likes-update1");
var secondPost = document.querySelector(".likes-update2");
var thirdPost = document.querySelector(".likes-update3");
var fourthPost = document.querySelector(".likes-update4");
var fifthPost = document.querySelector(".likes-update5");
var sixthPost = document.querySelector(".likes-update6");
var seventhPost = document.querySelector(".likes-update7");
var eigthPost = document.querySelector(".likes-update8");
var ninethPost = document.querySelector(".likes-update9");
var tenthPost = document.querySelector(".likes-update10");
let storyPerson = document.querySelector(".story-names");

let clickedLike = true; 
let hoveredStory = true;
/* --------------------- Post 1 Likes ------------------*/
function firstPostLike(){

    if(clickedLike){

        firstPostcount++;
        firstPost.innerText = firstPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 2 Likes --------------------*/


function secondPostLike(){

    if(clickedLike){

        secondPostcount++;
        secondPost.innerText = secondPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 3 Likes --------------------*/

function thirdPostLike(){

    if(clickedLike){

        thirdPostcount++;
        thirdPost.innerText = thirdPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 4 Likes --------------------*/

function fourthPostLike(){

    if(clickedLike){

        fourthPostcount++;
        fourthPost.innerText = fourthPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 5 Likes --------------------*/

function fifthPostLike(){

    if(clickedLike){

        fifthPostcount++;
        fifthPost.innerText = fifthPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 6 Likes --------------------*/

function sixthPostLike(){

    if(clickedLike){

        sixthPostcount++;
        sixthPost.innerText = sixthPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 7 Likes --------------------*/

function seventhPostLike(){

    if(clickedLike){

        seventhPostcount++;
        seventhPost.innerText = seventhPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 8 Likes --------------------*/

function eigthPostLike(){

    if(clickedLike){

        eigthPostcount++;
        eigthPost.innerText = eigthPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 9 Likes --------------------*/

function ninethPostLike(){

    if(clickedLike){

        ninethPostcount++;
        ninethPost.innerText = ninethPostcount +' '+ "like(s)";
    }
}
/*------------------------ Post 10 Likes --------------------*/

function tenthPostLike(){

    if(clickedLike){

        tenthPostcount++;
        tenthPost.innerText = tenthPostcount +' '+ "like(s)";
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

