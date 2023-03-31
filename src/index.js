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
        <ul data-id = ${movie.id} id="films"> 
            <img  >${movie.poster}</img> 
            <h5 class="card-title">${movie.title}</h5> 
            <li class="card-text">${movie.runtime}</li>   
            <li>${movie.showtime}</li> 
            <li>${movie.title}</li> 
           </ul>
           `
        let display = document.getElementById("films") 
        movieDetails.append(display) 
        console.log(movieDetails); 
    }); 

    
}
 