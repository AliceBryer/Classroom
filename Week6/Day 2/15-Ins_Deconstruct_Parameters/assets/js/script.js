var movieTitle = document.getElementById('movie-title');

fetch('http://www.omdbapi.com/?t=antman&apikey=9845c455')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var imdb = data.imdbID;
  getMovieDetails (imdb)
    console.log(data);
  });

// movieTitle.textContent = data.Title;

function getMovieDetails(id) {
fetch('http://www.omdbapi.com/?i='+ id + '&apikey=9845c455')  
}