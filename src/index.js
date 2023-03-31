document.addEventListener("DOMContentLoaded",() => {
    fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then(data => {
        console.log(data) 
        menuMovieDetails(data) 
    })
})

let movieDetails = document.getElementById("movie-menu") 

//display all menu movie details 
function menuMovieDetails(data){
    data.forEach(movie => {
         movieDetails.innerHTML += `
        <ul class="card"  data-id = ${movie.id} id="films"> 
            <img  class="card-img-top">${movie.poster}</img> 
            <h5 class="card-title">${movie.title}</h5> 
            <li class="card-text">${movie.runtime}</li>   
            <li class="card-text">${movie.showtime}</li> 
            <li class="card-text">${movie.title}</li> 
           </ul>
           `
        let display = document.getElementById("films") 
        movieDetails.append(display) 
        // console.log(movieDetails); 
    }); 

    
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
    console.log(ticketsAvailable)

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
