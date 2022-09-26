// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((eachFilm) => {
    return eachFilm.director;
  });

  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filterSteven = moviesArray.filter((eachFilm) => {
    if (
      eachFilm.director === "Steven Spielberg" &&
      eachFilm.genre.includes("Drama") === true
    ) {
      return true;
    } else {
      return false;
    }
  });

  return filterSteven.length;

  //let conGenero = filterSteven.forEach((eachFilmSteven) => {
  //  if (eachFilmSteven.includes("Drama") === true) {
  // }
  //});
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let scoreFilms = moviesArray.reduce((acc, eachFilm) => {
    if (eachFilm.score !== undefined) {
      return acc + eachFilm.score;
    } else {
      return acc;
    }
  }, 0);

  //console.log(scoreFilms);

  let average = scoreFilms / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let filterDramas = moviesArray.filter((eachFilm) => {
    if (eachFilm.genre.includes("Drama") === true) {
      return true;
    } else {
      return false;
    }
  });

  if (filterDramas.length === 0) {
    return 0;
  }

  let scoreFilmDramas = filterDramas.reduce((acc, eachFilm) => {
    if (eachFilm.score !== undefined) {
      return acc + eachFilm.score;
    } else {
      return acc;
    }
  }, 0);

  let average = scoreFilmDramas / filterDramas.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let cloneMoviesArray = structuredClone(moviesArray);

  let yearAsc = cloneMoviesArray.sort((b, a) => {
    if (b.year > a.year) {
      return 1;
    } else if (a.year > b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return -1;
      } else if (a.title < b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return yearAsc;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let cloneMoviesArr = structuredClone(moviesArray);

  let arrayOfTitles = cloneMoviesArr.map((eachFilm) => {
    return eachFilm.title.toLowerCase();
  });



  let finalArr = arrayOfTitles.sort((b, a) => {
    if (b < a) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  }).slice(0, 20);

  //if (cloneMoviesArr.length < 20) {
  // return cloneMoviesArr
  return finalArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
