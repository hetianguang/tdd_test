'use strict'

'use strict'
const  helloNumber  = (number) => {
    let result = ''
    if(number % 3 === 0){
         result +="Fizz"
    }
    if(number % 5 === 0){
         result+="Buzz"
    }
    if(result !== ''){
        return result
    }
    return number.toString()
}
module.exports = helloNumber;