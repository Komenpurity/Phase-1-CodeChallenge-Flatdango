/* document.addEventListener("DOMContentLoaded",() => {
    fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then(data => {
        console.log(data) 
    })
})

 */

function dataId(id){
    fetch(`http://localhost:3000/films/${id}`) 
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        displayMovieDetails(data) 
    })
}
dataId(1) 


let movieDetails = document.getElementById("movie-details")

//See first movie details 
function displayMovieDetails(data){
    data.forEach(movie => {
         movieDetails.innerHTML += `
        <div data-id = ${movie.id} class="card" id="display-details"> 
            <img class="card-img-top" >${movie.poster}</img> 
            <div class="card-body">
            <h5 class="card-title">${movie.title}</h5> 
            <li class="card-text">${movie.runtime}</li>   
            <li>${movie.showtime}</li> 
            <li>${movie.title}</li> 
            </div>
           </div>
           `
        let display = document.getElementById("display-details")
        movieDetails.append(display) 
        console.log(movieDetails); 
    }); 

    
}
 