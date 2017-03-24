'use strict'

'use strict'
const  helloNumber  = (number) => {
    if(number % 3 === 0){
        return "Fizz"
    }
    return number.toString()
}
module.exports = helloNumber;