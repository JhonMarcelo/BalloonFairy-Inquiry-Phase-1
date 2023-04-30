console.log("Test")


fetch("http://localhost:3000/client_Inquiry")
.then(res=>res.json())
.then(client => console.log(client))