console.log("Test")


fetch("http://localhost:3000/client_Inquiry")
.then(res=>res.json())
.then(client => console.log(client))


document.addEventListener("DOMContentLoaded",()=>{
    fetch("http://localhost:3000/balloon_types")
    .then(res => res.json())
    .then(balloon => balloon.forEach(balloonPic => createBalloonGalrey(balloonPic)))
        
});

//FUNCTIONS

function createBalloonGalrey(balloon){
    let balloonType = document.getElementsByClassName("balloonType")
    
    //loop through ballonType and compare the its id to the balloon type,
    //if it matches, will create a image element and adds h6 named 'description' for description
    //append img and description to that h4

    
}