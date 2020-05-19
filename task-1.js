"use script"
// ================= Задание 1 ======================

// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится:
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку и интерполяцию выведи в консоль информацию
// о товаре, получится:
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.


const name = "Генератор защитного поля";
const number = "цена за штуку";
const price = "1000 кредитов"; 
console.log(`${name}, ${number} ${price}`); 

const name2 = "Генератор защитного поля";
const number2 = "цена за штуку";
const price2 = "2000 кредитов"; 
console.log(`${name2}, ${number2} ${price2}`);

// ================= Задание 2  ======================

// Объяви две переменные хранящие имя пользователя и сообщение приветствия: userName и greeting
// Переменная с именем пользователя должна принимать данные через окно ввода.
// Используя шаблонную строку и интерполяцию выведи в консоль информацию, чтобы получилось: 'Имя пользователя, приветствие'


// let modal = prompt("Введите имя пользователя, и приветствие для администрации)");
// console.log(modal);


// ============== Задание 3 ===============================================
// объяви три переменные с именами var1, var2 и var3 соответственно
// присвой им значения: 1, 0, true
// выведи в консоль результаты сравнения:
// var1 > var2
// var1 == var3
// var1 === var3
// var1 != var3
// var2 != var3
// var1 > var2 == var3
// var1 > var2 > var3
// напиши в комментарии после команды console.log, ответ из консоли
// объясни почему получаются такие ответы


const var1 = 1;
const var2 = 0;
const var3 = true;

console.log("var1 > var2", var1 > var2 ); // true
console.log("var1 == var3", var1 == var3); // true
console.log("var1 === var3",var1 === var3); // false
console.log("var1 != var3", var1 != var3); // false
console.log("var2 != var3", var2 != var3); // true
console.log("var1 > var2 == var3", var1 > var2 == var3); //true
console.log("var1 > var2 > var3", var1 > var2 > var3); //false



// ============== Задание 4 ===============================================
// объяви переменную val
// выведи ее в консоль
// присваивай ей следующие значения: "River", "Mountain", 232, true, null,
// проверь на число каждое присвоенное значение и узнай тип данных, укажи результат в комментарий после сonsole.log


let val;
console.log(val); // undefined
console.log(typeof val); // undefined 

val = "River";
console.log(val); // River
console.log(typeof val); // string

val = "Mountain";
console.log(val); // Mountain 
console.log(typeof val); // string

val = 232 ;
console.log(val);
console.log(typeof val); // number

val = true ;
console.log(val);
console.log(typeof val); // boolean

val = null ;
console.log(val);
console.log(typeof val); // object 