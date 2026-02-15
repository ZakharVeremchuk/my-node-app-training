

// func for adding 2 number
const sum = (a, b) => {
    return a + b
}

// Decorator-func for logging name of called func
const logName = (fn) => {
    // Return func, inshide which we print
    // name of func argument
    return (...args) => {
        console.log(`Call function "${fn.name}"`);
        return fn(...args);
    }
}


// use decorator
const wrappedSum = logName(sum);
const result = wrappedSum(2, 3);
console.log(result);

