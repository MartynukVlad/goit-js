"use sript"

// ============== 1 ===============================================
// объяви две переменные alfa и beta со значениями 0.2 и 0.4
// запиши результат суммы этих переменных так, чтобы получилось 0.6 в переменную result
// выведи результат в консоль

const alfa = 0.2;
const beta = 0.4;
console.log("alfa + beta",alfa + beta ); // 0.6

// ============== 2 ===============================================
// выведи в консоль наибольшее и наименьшее число из указанных (2, 34, 99, 3, 22, 36, 733, 18)


console.log(Math.max(2,34, 99, 3, 22, 36, 733, 18)); // 733
console.log(Math.min(2,34, 99, 3, 22, 36, 733, 18)) // 2 

// ============== 3 ==============================================
// объяви переменную random
// пусть она принимает рандомное число от 3 до 19 включительно, с условием не больше 2х знаков после точки
// выведи результат в консоль

console.log((Math.random() * (19 - 3) + 3).toFixed(2));


 // ============== Задание 4 ===============================================
// объяви переменную val
// выведи ее в консоль
// присваивай ей следующие значения: "River", "Mountain", 232, true, null,
// проверь на число каждое присвоенное значение и узнай тип данных, укажи результат в комментарий после сonsole.log
 let val;
 console.log(val); 
 console.log(typeof val); // undefined

 val = "River";
 console.log(isNaN(val)); // true
 console.log(typeof val); // string 

 val = "Mountain";
 console.log(isNaN(val)); // true
 console.log(typeof val); // string
 
 val = "232";
 console.log(isNaN(val)); // false
 console.log(typeof val); // string

 val = true; 
 console.log(isNaN(val)); // false 
 console.log(typeof val); // boolean 

 val = false;
 console.log(isNaN(val)); // false 
 console.log(typeof val); // boolean