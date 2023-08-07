// Add your code here
function submitData(userName, userEmail){

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({name: userName, email: userEmail})
    })
    .then(res => res.json())
    .then(data => {
        const p = document.createElement("p")
        p.textContent = data.id
        document.querySelector("body").append(p)
    })
    .catch(message =>{
        const p = document.createElement("p")
        p.textContent = message
        document.querySelector("body").append(p)
    })
}