"use strict";

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока 
// посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число. 
// Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не 
// нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel,
//  показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// :bell: Делать проверку того, что пользователь ввел именно число, 
// а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного
//  ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
//  при этом результат prompt плюсовать к общей сумме не нужно, после чего снова 
// пользователю предлагается ввести число в prompt.
let input = prompt("введите число");
let total = 0;
console.log(typeof input);

// do {
//     input = +prompt("вводите число или нажмите отмена");
//     // input = Number(prompt("вводите число или нажмите отмена")); // преобразуем данные полученные из окна в тип данных number 
//     total += input;
//     console.log("текущее значение total: ", total);
// }while(input);

while(input) {
    input = +prompt("вводите число или нажмите отмена");
    total += input;
    console.log("текущее значение total: ", total);
}
console.log("итоговое значение total", total);