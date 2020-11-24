"use strict"; /* сторгий режим(не позволяет использовать устаревшие функции и тд) */

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

const _numberOfFilms = +prompt("How many films did u see?",'');




let personalMovieDB = {
    count: _numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

const _lastMovie = prompt("what is the last film did u see?",''),
      _Rate = +prompt("how did u rate it from 0 to 10",''),
      secMovie = prompt("what is the last film did u see?",''),
      secRate = +prompt("how did u rate it from 0 to 10",'');

personalMovieDB.movies = {
[_lastMovie]:_Rate,
[secMovie]:secRate
};




console.log(personalMovieDB);

