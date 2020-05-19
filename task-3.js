"use strict"

// ======= 1 ==============
// Напиши скрипт проверки количества товаров на складе.
// Есть переменные total (количество товаров на складе) и
// ordered (единиц товара в заказе).
// Сравни эти значения и по результатам выведи:
// __MCE_ITEM____MCE_ITEM__·
// Если в заказе указано число, превышающее количество товаров на складе,
// то выведи сообщение "На складе недостаточно товаров!".
// __MCE_ITEM____MCE_ITEM__·
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered,
// например 20, 80 и 130.

let total = 100;
let ordered = 50;

if(ordered > total){ 
    console.log("На складе недостаточно товаров!");

} else {
    console.log("Заказ оформлен, с вами свяжется менеджер");
}

ordered = 20;
if(ordered > total){
    console.log("На складе недостаточно товаров!");
} else {
    console.log("Заказ оформлен, с вами свяжется менеджер");
}

ordered = 80;
if(ordered > total){
    console.log("На складе недостаточно товаров!");
} else {
    console.log("Заказ оформлен, с вами свяжется менеджер");
}

ordered = 130;
if(ordered > total){
    console.log("На складе недостаточно товаров!");
} else {
    console.log("Заказ оформлен, с вами свяжется менеджер");
}

// ========= 2 =============
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:
// __MCE_ITEM____MCE_ITEM__·
// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// __MCE_ITEM____MCE_ITEM__·
// В протовном случае, если введен пароль который совпадает со значением
// константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// __MCE_ITEM____MCE_ITEM__·
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
// записать в message строку 'Доступ запрещен, неверный пароль!'
// __MCE_ITEM____MCE_ITEM__·
// После всех проверок вывести в alert значение переменной message.


// let message = prompt("введите пароль");
// const ADMIN_PASSWORD = "jqueryismyjam"; 
// console.log(message);
// if(message === null){
// message = "Отменено пользователем!";
// } else if (message === ADMIN_PASSWORD) {
// message = "Добро пожаловать!";
// } else {
//     message = "Доступ запрещен, неверный пароль!";
// }
// alert(message);





// ========= 3 =============
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let yUt = prompt("Укажите страну для доставки").toLowerCase();
console.log(yUt);
let delivery;
switch(yUt) {
    case "китай":
    delivery = 100;
    break;

    case "чили":
    delivery = 250;
    break;

    case "австралия":
    delivery = 170;
    break;

    case "индия":
    delivery = 80;
    break;

    case "ямайка":
    delivery = 120;
    break;

    default:
        delivery = "В вашей стране доставка не доступна";
        break;
}

console.log(`Доставка в ${yUt} будет стоить ${delivery} кредитов`);
alert(`Доставка в ${yUt} будет стоить ${delivery} кредитов`);