// ⁉️TASKGiven an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
//
//
// ✅SOLUTION

function sumMix(x){
    let sum = 0;
    for(i = 0; i < x.length; i++) {
        sum += Number(x[i])
    }

    return sum;
}

