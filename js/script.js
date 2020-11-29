"use strict"; /* сторгий режим(не позволяет использовать устаревшие функции и тд) */

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let _numberOfFilms;

function start(){
    _numberOfFilms = +prompt("How many films did u see?", '');
    while (_numberOfFilms == '' || _numberOfFilms == null || isNaN(_numberOfFilms)) {
        _numberOfFilms = +prompt("How many films did u see?", '');
    }
}
start();
let personalMovieDB = {
    count: _numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
      
        
        detectPersonalLevel() {

            if (personalMovieDB.count < 10) {
                console.log("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count > 30) {
                console.log("Вы киноман");
            } else if (personalMovieDB.count <= 30 || personalMovieDB.count >= 10) {
                console.log("Вы классический зритель");
            } else {
                console.log("Произошла ошибка");
            }
        },
        rememberMyFilms(){
            let i = 0;
            while (i < 2) {
                let _lastMovie = prompt("what is the last film did u see?", ''),
                    _Rate = +prompt("how did u rate it from 0 to 10", '');
        
                if ((_lastMovie == null || _lastMovie.length < 1 || _lastMovie.length > 50) ||
                    (_Rate == null || _Rate < 0 || _Rate > 10) || isNaN(_Rate)) {
        
                    alert('данные введены не коректно, введите еще раз');
        
                } else {
                    personalMovieDB.movies[_lastMovie] = _Rate;
                    i++;
                }
            }
        },
        showMyDB(hidden) {

            if (!hidden) {
                console.log(personalMovieDB);
            
            } else {
                console.log('данные скрыты');
               
            }
        },
        writeYourGenres() {

            
            for (let i = 1; i < 4; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`);
                if(genre!=null && genre.length >0){
                    personalMovieDB.genres[i - 1] = genre;
                }else{
                    i--;
                }
            }
            personalMovieDB.genres.forEach(function(item,i){
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        },
        objectCounter(obj) {

            console.log((Object.keys(obj)).length);
        },

        toggleVisibleMyDB(){                 
            personalMovieDB.privat=!personalMovieDB.privat;

        }
};
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();
personalMovieDB.objectCounter(personalMovieDB);
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);


