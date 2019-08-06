function fizzbuzz(maxValue) {
    for ( let i = 1; i <= maxValue; i++) {
        if (i % 2 === 0 &&  i % 3 === 0) {
            console.log( "FizzBuzz, ")
        }
        else if( i % 2 === 0) {
            console.log("Fizz, ", (i))
        }
        else if( i % 3 === 0) {
            console.log( "Buzz, ", (i))
        }
        else console.log(", ", (i))
    }
}

console.log(fizzbuzz(20))