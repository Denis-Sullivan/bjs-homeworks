"use strict";

//задача 1

function getSolutions( a, b, c ) {
    let D = b**2-4*a*c;
    let x1, x2;

    if(D < 0) {
        return {D, roots : []};
    }
    if(D == 0) {
        x1 = -b / (2*a);
        return {D, roots : [x1]};
    }
    if(D > 0) {
        x1 = (-b + Math.sqrt(D))/(2*a);
        x2 = (-b - Math.sqrt(D))/(2*a);
        return {D, roots : [x1, x2]};
    }
}


function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if(result.D < 0) {
      console.log("Уравнение не имеет вещественных корней");
    }
    else if(result.D == 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    }
    else if(result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
    
    return result;
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


//задача 2

function getAverageMark(marks) {
    if (marks.length > 0) {
        return marks.reduce((previousValue, currentValue) => currentValue += previousValue) / marks.length;
    } else {
        return 0;
    }
};

function getAverageScore(data) {
    if (Object.keys(data).length > 0 || data.length > 0) {
        let newArray = {}
        let averageScore = 0
        let sum = 0
        let array =  Object.entries(data).reduce(function(previousValue, currentValue) {
            averageScore = getAverageMark(currentValue[1]);
            sum += averageScore;
            return newArray[Object.values(currentValue)[0]] = averageScore;
            }, 0);
        newArray['average'] = (sum / Object.keys(newArray).length)
        return newArray;
    } 
    else if (Object.keys(data).length == 0) {
        return {'average': 0}
    } 
    else {
        return 0;
    }
};

let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
};

console.log(getAverageScore(data));