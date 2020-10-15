function sum(firstNumb, secondNumb) {
    return firstNumb+secondNumb
}

function myOwnMultiplyFunction(firstNumb, secondNumb) {
    return firstNumb*secondNumb
}

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

function getNumbers(array){
    
    let newArray = array.filter(function(item) {
        return (typeof item === "number")
    });
    return newArray.filter(function (value){
        return !Number.isNaN(value)
    });
}

function sortingNumbers(numbArray, sortOrder){
    if(sortOrder === 1){
       return numbArray.sort(function(a, b){return a-b})
    }
    else if(sortOrder === -1){
       return numbArray.sort(function(a, b){return b-a})
    }
}

function setPersonName(firstname, lastname){
    this.firstname = firstName = firstname[0].toUpperCase() + firstname.slice(1)
    this.lastname = lastName =  lastname[0].toUpperCase() + lastname.slice(1)
    this.fullname = firstName + " " + lastName
    this.initials = firstName[0] +"." + lastName[0]
    
    return this
}

function setDoubledPrice(productArray){

    for (let index = 0; index < productArray.length; index++) {
        productArray[index].price =  productArray[index].price*2
    }return productArray
}

function bothIsTrue(valueOne, valueTwo){
    let booleans = [valueOne, valueTwo]
    return booleans.every(x => x === true)
}

function removeTrailingnumbers(number){
    return parseFloat(number)
}

function getKeysAndValues(obj){
    let newObj = {keys: Object.keys(obj), values: Object.values(obj)}
    return newObj

    /* 
        att bara skriva "return {keys: Object.keys(obj), values: Object.values(obj)}" funkar också, vilket är best practice?
    */
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
module.exports.personFactory = setPersonName
module.exports.doublePrice = setDoubledPrice
module.exports.and = bothIsTrue
module.exports.removeLeadingTrailing = removeTrailingnumbers
module.exports.getKeysAndValues = getKeysAndValues
