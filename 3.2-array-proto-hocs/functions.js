"use strict";

//задача 1
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
  
function getNames() {
    const namesOfWeapons = [];
    weapons.forEach(weapon => namesOfWeapons.push(weapon.name));
    return namesOfWeapons;
};
  
function getCountReliableWeapons(durability) {
    const quantityOfWeapons = weapons.filter(weapon => weapon.durability > durability);
    return quantityOfWeapons.length;
};
  
function hasReliableWeapons(durability) {
    const reliableOfWeapons = weapons.some(weapon => weapon.durability > durability);
    return reliableOfWeapons;
};
  
function getReliableWeaponsNames(durability) {
    const namesOfWeaponsReliable = weapons
    .filter(weapon => weapon.durability > durability)
    .map(weapon => weapon.name);
    return namesOfWeaponsReliable;
};
  
function getTotalDamage() {
    const allDamage = weapons.reduce((total, weapon) => {
      return total + weapon.attack;
    }, 0);
    return allDamage;
};


//задача 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {};
};

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
    return sum += +arg;
    }, 0);
};

function compareArrays(arr1, arr2) {
    return (arr1.length == arr2.length) && arr1.every(function(element, index) {
    return element === arr2[index]});
};

function memorize(fn, limit) {
    const memory = [];
    return function (...args) {
      let findObject = memory.find(obj => compareArrays(obj.args, args));
      if (findObject) return findObject.result;
      if (memory.length === limit) memory.shift();
      let resultatFn = fn(...args);
      memory.push({args: args, result: resultatFn});
      return resultatFn;
    };
  };