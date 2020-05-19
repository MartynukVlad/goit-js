'use strict'; 
// логические операторы 
// &&
const kpi = 30;
const fact = kpi > 20 && kpi < 31;
//           true     &&   true 
console.log(fact); // true

const fact2 = kpi > 20 && kpi < 29;
//           true     &&   false 
console.log(fact2); // false

const fact3 = kpi > 31 && kpi < 32;
//           false    &&   true 
console.log(fact3); // false

console.log("cat" && "dog" && "horse"); // horse
//          true  &&  true &&  true 

// || 
const age = 30;
const trueAge = age < 31 || age > 29;
//              true     ||   true
console.log(trueAge); // true 
const trueAge2 = age < 31 || age > 32;
//                true    ||     false
console.log(trueAge2); // true 

// ! - оператор не
console.log(!true); // false
console.log(!0); // true
console.log(!!0); // false 
console.log(!"apple") // false

// ветвление 
// if(здесь условие ) { 
//     // тут запис. инструкции которые выпол. в слуае если условие возвращает True
// }
let cost; 
const sap = "pr";

if (sap === "pro") {
cost = 100;
};

if (sap === "pr") {
cost = 200;
};
console.log(cost) // 100

// if else
let day = prompt("Добрый день");
let weekDay;

// if (day === ("saturday") || day === ("sunday")) {
// weekDay = "holyday";
// } else{
//     weekDay = "workDay";
// };

// тернарный оператор - ?
// это искомя переменная = (условие) ? результат если условие True : если False
// weekDay = (day === ("saturday") || day === ("sunday")) ? "holyday" : "workDay";

// else if
// if (day === ("saturday") || day === ("sunday")) {
//     weekDay = "holyday";
// } else if(
//     day === "monday" ||
//     day === "tusday" ||
//     day === "wensday" ||
//     day === "thursday" ||
//     day === "friday"
// ){
//     weekDay = "workDay";
// } else {
//     weekDay = "inwalid entered data";
// }
// console.log(weekDay);

// switch 
// switch (day) {
//     case "monday": 
//     weekDay = "workday";
//     break;
    
//     case "tusday": 
//     weekDay = "workday";
//     break; 

//     case "wensday": 
//     weekDay = "workday";
//     break; 

//     case "thursday": 
//     weekDay = "workday";
//     break; 

//     case "friday": 
//     weekDay = "workday";
//     break; 

//     case "saturday": 
//     weekDay = "holiday";
//     break; 

//     case "sunday": 
//     weekDay = "holiday";
//     break; 
    
//     default: 
//     alert("invalid entered data");
//     weekDay = "invalid data"
// }

switch (day) {
    case "monday": 
    case "tusday": 
    case "wensday":  
    case "thursday":  
    case "friday": 
    weekDay = "workday";
    break; 
    
    case "saturday": 
    case "sunday": 
    weekDay = "holiday";
    break; 
    
    default: 
    alert("invalid entered data");
    weekDay = "invalid data"
}
console.log(weekDay);