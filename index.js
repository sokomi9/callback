//Callback patterns
//In Javascript, functions are first class objects
//Meaning, just like an object, a function might be passed into another function as an argument
//A function might also be returned as value from other functions
//A simple example might illustrate this

function greet(name) {
    console.log('Hello ${name}');
} 
function greetVishwas(callback) {
    const name = "Vishwas";
    callback(name);
}
greetVishwas(greet);

//greetVishwas is a higher order function
//greetFn is a callback function
//Why do we need a callback function?
//we can answer that by categorizing it into two: Synchronous and Asynchronous
//Synchronous callbacks are executed immediately
//In a asychronous programming callbacks are used to delay execution until a certain event occurs

