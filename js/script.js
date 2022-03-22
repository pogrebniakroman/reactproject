const numberOfFilms = +prompt('How much films you watch?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false

};

const a = prompt('One is watched films', ''),
      b = prompt('How you value it', ''),
      c = prompt('One is watched films', ''),
      d = prompt('How you value it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

