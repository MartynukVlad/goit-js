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

// типы данных: примитивы и сложеные
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

// математические операторы 

const x = 11;
const y = 4;
const z = 2;

console.log(x + y); // 15
console.log(x - y); // 7
console.log(x * y); // 44
console.log(x / y); // 2.75

console.log(x % y); // 3
console.log(y % z); // 0

// проверка на чётное число 
console.log(x % 2 === 0); // false
console.log(y % 2 === 0); // true
console.log(z % 2 === 0); // true
  
console.log(x ** y); // 14641
console.log(y ** z); // 16
console.log(y ** x); // 4194204

// последовательность действий

console.log(x + y * z); // 19
console.log((x + y) * z); // 30

console.log(x + y ** z); // 27
console.log((x + y) ** z); // 225

let value = 100;
value = value + 33; 
console.log(value); // 133

value = value + 33; 
console.log(value); // 166

value += 33;
console.log(value); // 199 

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

console.log("num1 + str1", num1 + str1); // 55

console.log("num1 + str1", typeof (num1 + str1)); // string

console.log(str1 + num1 + str2); // "5" + 5 + "18" = 5518

console.log(str1 + num1 + num2 + str2); // "5" + 5 + 18 + "18" = 551818

console.log(num1 + num2 + str2); //  5 + 18 + "18" = 2318

// преобразование типов данных

let age = "14";
console.log(typeof age) // string
age = +age; //  способ преобразования строки в число 
console.log(typeof age); // number
age = "20";
console.log(typeof age); // string
age = Number(age); // втрой способ преобразования строки в число 
console.log(typeof age); // number

let total = 30;
console.log(typeof total); // number
total = total + ""; // первый способ преобразования числа в строку
console.log(typeof total); // string
total = 40;
console.log(typeof total); // number
total = String(total); // второй способ преобразования числа в строку
console.log(typeof total); // string

total = Boolean(total); // это способ преобразования значения в boolean
console.log(total); // true 
console.log(typeof total); // boolean

// логическое приведение типов 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean('')); // false
console.log(Boolean("")); // false
console.log(Boolean(``)); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(Boolean(" ")); // true
console.log(Boolean("1")); // true
console.log(Boolean(1)); // true
console.log(Boolean(Infinity)); // true

// сложение дробных чисел 
console.log(0.1 + 0.2); // 0.30000000000000004

console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// методы объекта Math

console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.5)); // 1
console.log(Math.floor(1.99)); // 1

console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.5)); // 2
console.log(Math.ceil(1.99)); // 2

console.log(Math.round(1.1)); // 1
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.99)); // 2

console.log(Math.max(5, 8, 1, 3, 0)); // 8
console.log(Math.min(5, 8, 1, 3, 0)); // 0

console.log(Math.pow(3, 7)); // 2187

console.log(Math.random()); // рандомное число от  [0 - 1) не включая единицу

// console.log(Math.random() * (max - min) + min)
console.log(Math.random() * (10 - 1) + 1);
console.log((Math.random() * (10 - 1) + 1).toFixed(2)); 

// выведи результат в консоль
// методы parseInt и parseFloat
console.log(Number.parseInt("112px")); // 112
console.log(Number.parseInt("11abc22")); // 11
console.log(Number.parseInt("1.1xy9")); // 1 - ЦЕЛОЕ ЧИСЛО
console.log(Number.parseInt("qweQWE110011")); // NaN

console.log(Number.parseFloat("112px")); // 112
console.log(Number.parseFloat("11abc22")); // 11
console.log(Number.parseFloat("1.11xy9")); // 1.11 - ДРОБНОЕ ЧИСЛО
console.log(Number.parseFloat("qweQWE110011")); // NaN

// проверка на число
const validNumber = Number("1024");
console.log(validNumber); // 1024
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("ggg");
console.log(invalidNumber); // NaN
console.log(Number.isNaN(invalidNumber)); // true

// циклы 
// while

let counter = 0;

while (counter < 10) {
    counter = counter + 1;
    console.log(counter);
}

let minAge = 25;
let maxAge = 25;


while (minAge < maxAge) {
    minAge += 1;
    console.log("Вы подходите по возрасту")
    console.log(minAge);
}

// do {
//     minAge += 1;
//     console.log("Вы подходите по возрасту")
//     console.log(minAge);
// } while (minAge < maxAge);

// цикл со счётщиком
const max = 100;

for(let i = 10; i <= max; i += 20){
    console.log(i)
}

let sum = 0;
for (let index = 0; index < 10; index++) {
 sum += 1;
//  console.log(sum);
   
}
console.log(sum);

const max1 = 10;
for (let index = 1; index < max1; index++) {
    console.log(max1 % index);
}

// break and continue
for(let i = 0; i < 10; i++) {
if(i === 5) {
    console.log(i);
    console.log("мы дошли до 5 операции и прерываем цикл");
    break;
}
}

for (let i = 0; i < 10; i++) {
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

// области видимости 
let firstName1 = "Vlad"; // глобальная переменная 
if(true){
    console.log(firstName1);
    const lastName1 = "Martyniuk";
    console.log(lastName1);
}
console.log(firstName1);
// console.log(lastName1); 
