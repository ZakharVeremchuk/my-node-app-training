// func for adding 2 number
const sum = (a, b) => {
    return a + b
}


// decorator to validate passed function arguments
const integerArgs = (fn) => {
    return (...args) => {
        if(args.some((arg) => !Number.isInteger(arg))) {
            throw new Error('Passed arguments need to be integer numbers')
        }

        return fn(...args);
    }
}


// Use decorator
const wrappedSum = integerArgs(sum);
const result = wrappedSum('2', 3);


// Eror: Passed arguments need to be integer numbers
console.log(result)
