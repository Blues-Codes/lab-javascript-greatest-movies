// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const movieDirectors = moviesArray.map((movie) => movie.movieDirector);
    return movieDirectors
} let newDirectors =[];
for (let i =0; i < moviesArray.length; i++) {
  if (!newDirectors.includes(moviesArray[i])) {
    newDirectors.push(moviesArray[i]);
  }
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let ssDramaCount = 0;
    moviesArray.map(function(movie){
       if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
         ssDramaCount++
       }
     });
     return ssDramaCount
   }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
      return 0
    }
    let sum = 0;
  moviesArray.forEach(function(movie){
    if(!movie.score){
      movie.score=0
    }
    sum += movie.score;
  });
    return Math.round((sum / moviesArray.length)*100)/100
}

    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return scoresAverage(moviesArray.filter((el)=> {
        return el.genre.includes("Drama")
      }))
}
   

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.sort((a, b)=> {
        if(a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year -b.year
    }) .slice(0,20)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray].sort((a,b)=> {
        return a.title.localeCompare(b.title)
    }).map((movie)=>{
        return movie.title
    }).slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
