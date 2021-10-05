//Author: Kent Pedrocha

/** Question 1: ES6 Features
● Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
● Input 
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
Output
['pizza','wings'] **/

const mixedArray = (['PIZZA', 10, true, 25, false, 'Wings'])
const sample =([1, 2, 3])


let lowerCaseWords = (word) => {
    let prom_Array = new Promise((resolve, reject) => {

        let newArray = []
        for(x of word){
            if(typeof(x) === "string"){
                newArray.push(x.toLowerCase())
            }
        }
        if(newArray.length != 0) {
            console.log(newArray)
            resolve("")
        }else{
            reject("***errors***")
        }
    })
    prom_Array.then(
        success =>  console.log(success),
        error =>  console.log(error)
    )
}

lowerCaseWords(mixedArray)