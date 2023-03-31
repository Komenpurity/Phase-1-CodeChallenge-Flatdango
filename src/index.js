document.addEventListener("DOMContentLoaded",() => {
    fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then(data => {
        console.log(data) 
        menuMovieDetails(data) 
    })
})



/* function dataId(id){
    fetch(`http://localhost:3000/films/${id}`) 
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        displayMovieDetails(data) 
    })
}
dataId(1) 
 */

let movieDetails = document.getElementById("movie-menu") 

//display all menu movie details 
function menuMovieDetails(data){
    data.forEach(movie => {
         movieDetails.innerHTML += `
        <ul class="card" data-id = ${movie.id} id="films"> 
            <img  class="card-img-top">${movie.poster}</img> 
            <h5 class="card-title">${movie.title}</h5> 
            <li class="card-text">${movie.runtime}</li>   
            <li class="card-text">${movie.showtime}</li> 
            <li class="card-text">${movie.title}</li> 
           </ul>
           `
        let display = document.getElementById("films") 
        movieDetails.append(display) 
        console.log(movieDetails); 
    }); 

    
}
 