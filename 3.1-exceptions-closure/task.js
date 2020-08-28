"use strict";

//задача 1


function parseCount(quantity) {
    let newQuantity = Number.parseInt(quantity);
    if (newQuantity) {
        return newQuantity;
    } 
    else {
        throw new Error ('Невалидное значение');
    };
};

function validateCount(quantity) {
    try {
        return parseCount(quantity);
    } 
    catch(currentError) {
        return currentError;
    };
};

//задача 2

class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.error = new Error('Треугольник с такими сторонами не существует');
  
      if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a) {
        throw this.error;
      };
    };
  
    getPerimeter() {
      return (this.a + this.b + this.c);
    };
  
    getArea() {
      let halfPerimetr = this.getPerimeter() / 2;
      return parseFloat(Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c)).toFixed(3));
    };
  
  };
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } 
    catch (TypeError) {
      return new class stub {
        constructor() {
          this.error = 'Ошибка! Треугольник не существует'
        };
  
        getArea() {
          return this.error;
        };
  
        getPerimeter() {
          return this.error;
        };
  
      };
    };
  };