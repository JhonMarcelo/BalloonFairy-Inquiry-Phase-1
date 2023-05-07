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
    console.log(balloonType[1])
}