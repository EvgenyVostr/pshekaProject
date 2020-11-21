"use strict"; /* сторгий режим(не позволяет использовать устаревшие функции и тд) */

/* let number = 5; 
const leftBorderWidth = 1; 

number = 10;
console.log(number);

const obj = {
    a:50,
    b:"23jjj"
};
obj.a=10;
console.log(obj);
const lrm = 'lorem';
console.log(lrm); */
let result = confirm("are u ready??");
if (result == true) {


    const obj = {
        name: "psheka",
        age: 23,
        coutry: "Russia",
        isMaried: true,
        sex: "feMale"
    };

    obj.name = prompt("watz ur name", "psheka");
    obj.age = +prompt("how old a u?", "23");
    obj.coutry = prompt("where r u?", "Russia");
    obj.isMaried = confirm("a u married?");
    obj.sex = prompt("ur sex", "Male");



    if (obj.sex == "Male") {

        if (obj.isMaried == true) {
            alert(`${obj.name} is married. He is ${obj.age} years old. And he is from ${obj.coutry}!`);
        } else {
            alert(`${obj.name} is not married. He is ${obj.age} years old. And he is from ${obj.coutry}!`);
        }
    } else {
        if (obj.isMaried == true) {
            alert(`${obj.name} is married. She is ${obj.age} years old. And she is from ${obj.coutry}!`);
        } else {
            alert(`${obj.name} is not married. She is ${obj.age} years old. And she is from ${obj.coutry}!`);
        }
    }
    alert('now fukoff');
} else {
    alert('fukoff');
}