
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genders: {},
    private: false,
    start: function(){
        personalMovieDB.count = +prompt('How much films you watch?', '');
        while (personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('How much films you watch?', '');
        }
   },
   rememberMyFilms: function(){
    for (let i = 0; i < 2; i++){
        const a = prompt('one is watched films?', ''),
              b = prompt('How value film?', '');

              if(a!=null && b!=null && a!='' && a != '' && b!='' && a.length < 50 ){
             personalMovieDB.movies[a] = b;
             console.log('done');

              } else{
                  console.log('error');
                  i--;
              }
    }

},
detectPersonalLevel: function(){
    if(personalMovieDB.count<10){
        console.log(' Watched quite a few films');

    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('You classic viewer');
    } else if (personalMovieDB.count >= 30){
        console.log('You cinephile');
    }else{
        console.log('An error has occurred');
    }
},
showMyDB: function (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
},

toggleVisibleMyDB: function(){
  if(personalMovieDB.private){
    personalMovieDB.private = false;
  } else{ personalMovieDB.private = true;

  }
},
writeYourGenres: function(){
    for(let i =1; i<=3; i++){
        let genre = prompt(`Your like genres number ${i}`);

        if(genre === '' || genre == null){
            console.log('You enter incorrect data or dont enter!');
            i--;
        }else{
            personalMovieDB.genders[i-1] = genre;
        }
        
    }
    personalMovieDB.genders.forEach((item, i)=> {
        console.log(`Love genres ${i+1} - it ${item}`);
    });
}

};



