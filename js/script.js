"use strict"; /* сторгий режим(не позволяет использовать устаревшие функции и тд) */

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

const _numberOfFilms = +prompt("How many films did u see?",'');



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
let i = 0;
while(i<2){
    let _lastMovie = prompt("what is the last film did u see?",''),
        _Rate = +prompt("how did u rate it from 0 to 10",'');

    if ((_lastMovie.length<1||_lastMovie.length>50)||(_Rate<0||_Rate>10)||isNaN(_Rate)){
        alert('данные введены не коректно, введите еще раз');
        
    }else{
        personalMovieDB.movies[_lastMovie] = _Rate;
        i++;
    }
}



console.log(personalMovieDB);
if (personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмовь");
}else if(personalMovieDB.count>30){
    console.log("Вы киноман");
}else if (personalMovieDB.count<=30||personalMovieDB.count>=10){
    console.log("Вы классический зритель");
}else{
    console.log("Произошла ошибка");
}

