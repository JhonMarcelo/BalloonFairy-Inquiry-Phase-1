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

    for(let i =0; i < balloonType.length; i++){
        if(balloonType[i].id === balloon.type){
            let description = document.createElement('p')
            let img1 = document.createElement("img")
            let form = document.getElementById("inquiryForm")
        
            //MOUSEOVER AND MOUSE LEAVE EVENTLISTENER
            img1.addEventListener("mouseover",()=>{
                img1.width = "450"
                img1.height = "350"
            } )
            img1.addEventListener("mouseleave",()=>{
                img1.width = "400"
                img1.height = "300"
            } )
            
            //CLICK EVENT LISTENER to scroll down to inquiry form element
            img1.addEventListener("click", ()=>{
                form.scrollIntoView()
            })


            //add description from db.json to p
            description.textContent = balloon.description

            //assign the img URL from db.json to an img element in html
            img1.classList.add(`${balloon.type}img1`)
            img1.src = balloon.img1
            img1.width = "400"
            img1.height = "300"


//*******FIX SIZING FIRST BEFORE PUTTING THIS 2 IMG BACK */

            let img2 = document.createElement("img")
            img2.addEventListener("mouseover",()=>{
                img2.width = "450"
                img2.height = "350"
            } )
            img2.addEventListener("mouseleave",()=>{
                img2.width = "400"
                img2.height = "300"
            } )

             //CLICK EVENT LISTENER to scroll down to inquiry form element
             img2.addEventListener("click", ()=>{
                form.scrollIntoView()
            })

            img2.classList.add(`${balloon.type}img2`)
            img2.src = balloon.img2
            img2.width = "400"
            img2.height = "300"

            let img3 = document.createElement("img")
            img3.addEventListener("mouseover",()=>{
                img3.width = "450"
                img3.height = "350"
            } )
            img3.addEventListener("mouseleave",()=>{
                img3.width = "400"
                img3.height = "300"
            } )
             //CLICK EVENT LISTENER to scroll down to inquiry form element
             img3.addEventListener("click", ()=>{
                form.scrollIntoView()
            })

            img3.classList.add(`${balloon.type}img3`)
            img3.src = balloon.img3
            img3.width = "400"
            img3.height = "300"

            
            //,img2,img3 down there
            balloonType[i].append(description,img1,img2,img3)
        }

    }
}