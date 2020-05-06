'use strict';
// типы переменных 
let a; // это обёвление переменной 
console.log(a); // undefined

// переменную объявленую через let можно именять 
a = 0;  
console.log(a); // 0

a = 100;  
console.log(a); // 100 

const b = "Vlad"; // всегда объевляем вместе со значением
console.log(b);
// b = "Oleg"; // изменять значение переменной const нельзя 
// const c;  // ТАК ОБЪЕВЛЯТЬ НЕЛБЗЯ

// типы данных: примитивы и сложные
// примитивы: number, string, null, boolean, undefined

let alfa;
console.log(alfa); // undefined
console.log(typeof alfa); // undefined

alfa = 3;
console.log(alfa); // 3
console.log(typeof alfa); // number 

alfa = 'js'; 
console.log(alfa); // js
console.log(typeof alfa); // string 

alfa = null; 
console.log(alfa); // null 
console.log(typeof alfa); // object

alfa = true; 
console.log(alfa); // true
console.log(typeof alfa); // boolean

alfa = false;
console.log(alfa); // false
console.log(typeof alfa); // boolean 

// взаемодействие с пользователями (сплывающие окна)
// alert("Hi"); // выводит окно с инф. и одной кнопкой Ок

// let modal = prompt("Введите ваши данные"); // выводит окно с смс и двумя кнопаками подтв. и отмены отправки 
// console.log(modal);

// let answer = confirm("Вы согласны"); // выводит окно с воросом и двумя ответами Да (возращает true) или Нет (возращает false)
// console.log(answer); 

// шаблонная строка `` и интерполяция ${}
const name = "Vlad";
const lastName = "Martyniuk";
let greet = "Hello"; 

console.log(`${greet}, ${name} ${lastName}`)

// операторы сравнения
const p = 100;
const r = 3;
const s = 100;

console.log("p > r", p > r); // true 

console.log("p < r", p < r); // false

console.log("p >= s", p >= s); // true

console.log("p <= s", p <= s); // true

console.log("3 > 2 > 1", 3 > 2 > 1); // false 

//                      true  >  1

console.log("3 > 2 >= 1", 3 > 2 >= 1); // true 

//                      true  >=  1

// логическое приведение типов 
// true == 1
// false == 0

const num1 = 5;
const num2 = 18;

const str1 = "5";
const str2 = "18";
// строгое равенство - сначала срав. типы данных 
console.log("num1 === str1", num1 === str1); // false, потому что разные типы данных 
console.log("num1 === 5", num1 === 5); // true

// не строгое равенство 
console.log("num1 == str1", num1 == str1); // true, потому что происходит логическое приведение типов 
console.log("num1 == 5", num1 == 5); // true

// сторогое не равенство 
console.log("num1 !== num2", num1 !== num2); // true

console.log("num1 != str1", num1 != str1); // false