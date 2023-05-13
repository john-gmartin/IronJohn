
  
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    let directorslist= moviesArray.map((movies)=>movies.director)
    return directorslist
}
console.log(getAllDirectors(movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function fDirectors(moviesArray) {
    let directorslist= moviesArray.map((movies)=>movies.director)
    let filteredList= directorslist.filter((director,index)=> {
    return directorslist.indexOf(director)===index;
});
  return filteredList
}
console.log(fDirectors(movies));

// --------------------------------------------------------

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    let SpielbergTotal=0
    moviesArray.filter((movies)=>{
        if ( movies.director==='Steven Spielberg' && movies.genre.includes('Drama')){
           SpielbergTotal+=1
        }
    })
    return SpielbergTotal
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// MÉTODO QUE HE USADO PARA EL EJERCICIO EN CONCRETO

// function scoresAverage(moviesArray) {
//     let scoreArray= moviesArray.map((movies)=>movies.score)
//     let sumaTotal= scoreArray.reduce(function(a, b){ return a + b; });
//     let media=(sumaTotal/scoreArray.length).toFixed(2);
//     return media
// }
// console.log(scoresAverage(movies));

// MÉTODO DE CLASE PARA APROVECHAR FUNCION EN ITERATION 4

const scoresAverage = (movies) => {
    if (movies.length === 0) return 0;
    // usando el reduce apuntamos al movies y le pasamos el metodo con 2 argumentos
    let puntuacion = movies.reduce((acumulador, valorActual) => {
      if (valorActual.score) {
        return acumulador + valorActual.score;
      } else {
        return acumulador;
      }
    }, 0);
    let average = (puntuacion / movies.length).toFixed(2);
    return Number(average);
  };
  console.log(scoresAverage(movies));
  scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    let dramaArray= movies.filter(movies=>
        movies.genre.includes("Drama"))
     return scoresAverage(dramaArray)
    }
console.log(dramaMoviesScore(movies));
dramaMoviesScore(movies)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let yearOrder= moviesArray.sort((a,b)=>{
        if (a.year>b.year)  return a.year-b.year;
        if (a.year<b.year)  return a.year-b.year;
        else return a.title.localeCompare(b.title);
        
    })
    return yearOrder
}
console.log(orderByYear(movies));
orderByYear(movies)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   let alphaOrder= moviesArray.map((movie)=>movie.title).sort().slice(0,20)
   return alphaOrder
}
console.log(orderAlphabetically(movies));


