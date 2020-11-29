/* const obj = {
    first: 1,
    second: 2,
    third: 12,
    vloj: {
        a: 1,
        b: 92
    }
};

//функция поверхностного копирования объекта
function copy(necessaryObject) {
    const copy = {};
    for (let key in necessaryObject) {
        copy[key] = necessaryObject[key];
    }
    return copy;
}

let changeValue = copy(obj);

changeValue.third = 100; //меняем значение объекта


console.log(obj);
console.log(changeValue);

const obj2 = {
    c: 19,
    d: 20.2
};



const clone = Object.assign({}, obj2); //копия

clone.d = 200200.2;

console.log(Object.assign(obj, clone)); //объединяем 2 объекта

let oldArray = [1, 3, 42, 2];

let newArray = oldArray.slice(); //копия массива
newArray[1] = 300;
console.log(oldArray);
console.log(newArray);

const a = [1, 2, 3, 4, 5],
    b = ["q", "w", "e", "r"],
    c = [...a, ...b, "!", "?"]; //spread оператор, позволяющий копировать и объединять массивы и объекты

console.log(c);

const OOO = {
    o: 1,
    oo: 2,
    OOO: 3
};

const copyOOO = {...OOO};
copyOOO.o = 100;
console.log(OOO);
console.log(copyOOO); */