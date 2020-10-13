
// modifiera sum() tills testet blir godkänt!
function sum(firstNumb, secondNumb) {
    return firstNumb+secondNumb
}

function myOwnMultiplyFunction(firstNumb, secondNumb) {
    return firstNumb*secondNumb
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(number) {
    let trueOrFalse
    if (number<0) {
        trueOrFalse=true
    }
    else{
        trueOrFalse=false
    }
    return trueOrFalse
}

function roundingNumber(decimalNumb){
    return Math.round(decimalNumb)
}

function addingUpNumbers(numb){

    let answer = 0

    for (let index = 1; index <= numb; index++) {
        answer += index
    }
    return answer
}

function findMinMaxValues(array){
    
    let minValue = Math.min(...array)
    let maxValue = Math.max(...array)

    return minAndMaxValue = {min: minValue, max: maxValue}
}

function dateIsAfterXmas(date){

    let xMasDate = new Date('2020-12-24')

    return new Date(date) >= xMasDate
}

function sortWordsByStringLength(words){

    return words.sort(function(wordOne,wordTwo){
        return wordOne.length - wordTwo.length;
      });
}

function charCounter(char, sentence){

        let regExp = new RegExp(char,"gi");

        return (sentence.match(regExp)|| []).length;
}

/* --------------------------------- INTE KLAR ----------------------------------------------- */

function getNumbers(array){
    
    //return array.filter(isNaN)
    return array.filter(function(item) {
        return (typeof item === "number")
    });
}

/* --------------------------------------------------------------------------------------------*/

function sortingNumbers(numbArray, sortOrder){
    if(sortOrder === 1){
       return numbArray.sort(function(a, b){return a-b})
    }
    else if(sortOrder === -1){
       return numbArray.sort(function(a, b){return b-a})
    }
}


// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = roundingNumber
module.exports.addingUp = addingUpNumbers
module.exports.findMinMax = findMinMaxValues
module.exports.afterXmasEve2020 = dateIsAfterXmas
module.exports.sortByStringLength = sortWordsByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = getNumbers
module.exports.sortNumbers = sortingNumbers
module.exports.personFactory = undefined
module.exports.doublePrice = undefined
module.exports.and = undefined
module.exports.removeLeadingTrailing = undefined
module.exports.getKeysAndValues = undefined
