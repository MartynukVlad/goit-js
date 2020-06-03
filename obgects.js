"use strict";
// методы конструктара
const hero = {
  name: "Iron man",
  power: 1000,
  speed: 500,
};
console.log(hero);

const keysOfHero = Object.keys(hero);
console.log(keysOfHero);

for (const key of keysOfHero) {
  console.log(key);
}
const entriesOfHero = Object.entries(hero);
console.log(entriesOfHero);

for (const entry of entriesOfHero) {
  const key = entry[0];
  const value = entry[1];
  console.log(`key -${key}, value - ${value}`);
}

const valuesOfHero = Object.values(hero);
console.log(valuesOfHero);

for (const value of valuesOfHero) {
  console.log(value);
}

const testScore = { 1: 16, 2: 21, 3: 21, 4: 23 };
const values = Object.values(testScore);
console.log(values);
let total = 0;
for (const value of values) {
  total += value;
}
console.log(total);

// роспыление элементов (spread)
// во время вызова функции для передачи элементов по одельности
const test1 = [18, 14, 12, 21, 17, 29];
const minTest = Math.min(...test1);
console.log(minTest);

// альтернатива метода заряда 
const r = [1, 2, 3];
console.log(r);
const copyR = [...r];
console.log(copyR);
const copyR1 = [...r, 4, 5, 6];
console.log(copyR1);

// канкатынация масивов 
const first = [1, 2, 3];
const second = [4, 5, 6];
const concat1 = [...first, second];
console.log(cancat1)