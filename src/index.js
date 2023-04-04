document.addEventListener("DOMContentLoaded",() => {
    fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then(data => {
        console.log(data) 
        menuMovieDetails(data) 
    })
})

let movieDetails = document.getElementById("movie-menu") 
let details = document.getElementById("movie-details") 


//display all menu movie details 
function menuMovieDetails(data){
    data.forEach(movie => {
         movieDetails.innerHTML += `
        <ul data-id = ${movie.id} id="films"> 
            <li id= "film-item" > <a id= "tag" >${movie.title}</a> </li>
        </ul>
           `
        let display = document.getElementById("films") 
        movieDetails.append(display) 
        // console.log(movieDetails); 
    }); 

    /* let aTag = document.getElementById("tag") 

    aTag.addEventListener("click",(event) => {
        event.preventDefault()
        console.log("clicked") 
        details.innerHTML = ""
        clickedMovieMenu(data) 
    }) */
   
}
 

//display only first movie details
function dataId(id){
    fetch(`http://localhost:3000/films/${id}`) 
    .then((response) => response.json())
    .then(data => {
       // console.log(data)
        firstMovieDetails(data) 
        availableTickets(data)
    })
}
dataId(1) 

const title = document.getElementById("title")
const poster = document.getElementById("poster")
const runtime = document.getElementById("runtime")
const showtime = document.getElementById("showtime")
const tickets = document.getElementById("tickets")
const ticketsRemaining = document.getElementById("available-tickets")
const availableButton = document.getElementById("available") 
const rem = document.getElementById("remaining-tickets")

function firstMovieDetails(data){
    title.innerText = data.title
    poster.setAttribute("src",data.poster)
    runtime.innerText = "Show Runtime: " + data.runtime
    showtime.innerText = "Showtime: " + data.showtime

    let ticketsAvailable = data.capacity - data.tickets_sold
   // console.log(ticketsAvailable)

    tickets.innerHTML = "Tickets Available are: " + ticketsAvailable
}


//available tickets functionality
function availableTickets(data){
    ticketsRemaining.addEventListener("click",(event) => {
        event.preventDefault()
        let available = data.capacity - data.tickets_sold
           
        if(available > 0){
            rem.innerHTML = `Available tickets are: ${available} `
        } else {
            rem.innerHTML = "Sold out!" 
        }

        availableButton.appendChild(rem) 
    })


}
availableTickets() 




// Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details
/* function clickedMovieMenu(data){
    console.log(data)
} */

