"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

  if(Number.isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } 
  else if (Number.isNaN(contribution)) {
    return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
  } 
  else if (Number.isNaN(amount)) {
    return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
  } 
  else if (Number.isNaN(date)) {
    return `Параметр "Дата" содержит неправильное значение ${date}`;
  };

  const balance = amount - contribution;
  const quantityMonths = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
  const monthlyPercent = percent / 100 / 12;
  const payment = balance * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, quantityMonths) - 1));
  console.log(+(payment * quantityMonths).toFixed(2));

  return +(payment * quantityMonths).toFixed(2);
}

function getGreeting(name) {

  let noName = 'Аноним'
  if (!name || name == "null" || name == "undefined" || name == '""') {
    return `Привет, мир! Меня зовут ${noName}`;
  } 
  else {
    return `Привет, мир! Меня зовут ${name}`
  }
 
}