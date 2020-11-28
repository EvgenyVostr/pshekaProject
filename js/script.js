"use strict"; /* сторгий режим(не позволяет использовать устаревшие функции и тд) */

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

let _numberOfFilms;

function start(){
     _numberOfFilms = +prompt("How many films did u see?",'');
     while(_numberOfFilms == '' || _numberOfFilms == null || isNaN(_numberOfFilms)){
        _numberOfFilms = +prompt("How many films did u see?",'');
     }
}

start();




                let personalMovieDB = {
                    count: _numberOfFilms,
                    movies: {},
                    actors: {},
                    genres: [],
                    privat:false
                };


/* for(let i = 0;i<2;i++){
    
    let _lastMovie = prompt("what is the last film did u see?",''),
        _Rate = +prompt("how did u rate it from 0 to 10",'');

    if ((_lastMovie.length<1||_lastMovie.length>50)||(_Rate<0||_Rate>10)||isNaN(_Rate)){
        alert('данные введены не коректно, введите еще раз');
        i--;
    }else{
        personalMovieDB.movies[_lastMovie] = _Rate;
    }

        
} */


function rememberMyFilms(){

    let i = 0;
    while(i<2){
        let _lastMovie = prompt("what is the last film did u see?",''),
            _Rate = +prompt("how did u rate it from 0 to 10",'');

        if ((_lastMovie==null||_lastMovie.length<1||_lastMovie.length>50)||
            (_Rate==null||_Rate<0||_Rate>10)||isNaN(_Rate)){
                
            alert('данные введены не коректно, введите еще раз');
            
        }else{
            personalMovieDB.movies[_lastMovie] = _Rate;
            i++;
        }
    }  
}

//rememberMyFilms();



function detectPersonalLevel(){

    if (personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмовь");
    }else if(personalMovieDB.count>30){
        console.log("Вы киноман");
    }else if (personalMovieDB.count<=30||personalMovieDB.count>=10){
        console.log("Вы классический зритель");
    }else{
        console.log("Произошла ошибка");
    }    
}

//detectPersonalLevel();

function showMyDB(hidden){

    if (!hidden){
        console.log(personalMovieDB);
    }else{
        console.log('данные скрыты');
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    
    for (let i = 0;i<3;i++)
    {
        let c=i+1;
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${c}`);
    }
}

writeYourGenres();