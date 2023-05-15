# BalloonFairy-Inquiry-Phase-1

# Balloon Fairy Phase-1

This is a web application for client inquiry on their orders.

## Installation

Run the json-server to start the web application to communicate with the db.json.

```bash
json-server -w db.json
```

## Usage

 The page will fetch all the photos and information when loaded through the db.json. using the fetch command line.

```python
import Balloon Photos

document.addEventListener("DOMContentLoaded",()=>{
    fetch("http://localhost:3000/balloon_types")
    .then(res => res.json())
    .then(balloon => balloon.forEach(balloonPic => createBalloonGallery(balloonPic)))
```
A Click eventListener is added to the 'BOOK NOW' and to all of the photos button which scrolls down to the Inquiry Form by using the 'scrollIntoView()' function.

```python
carouselBTN.addEventListener("click", () => {
    form.scrollIntoView()
})
```
Adds an eventListener of mouseover and mouseleave on each photos so they will enlarge when the mouse enters the photo and will return back to its original size when the mouse leaves the photo.
```python

img2.addEventListener("mouseover",()=>{
                img2.width = "450"
                img2.height = "350"
            } )
img2.addEventListener("mouseleave",()=>{
                img2.width = "400"
                img2.height = "300"
            } )
```

## GETTING INFO FROM FORM

The submit button on a the form is a submit eventListener that 'POST' or add all the acquired data from the inquiry form to the 'client_Inquiry' database.

The <textarea> must also include a name = "inquiryMessage" same as the id = "inquiryMessage" to be able to this line of code to get all the data from the Inquiry Form
```python
const formData = Object.fromEntries(new FormData(e.target))
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## VIDEO WALKTHROUGH
https://www.youtube.com/watch?v=5eRHkSZIh-Y

## License

[MIT](https://choosealicense.com/licenses/mit/)