function func(){
    var a = 6
    function f(b){
        var sum = a+b;
        return sum;
    }
    a = 5;
    return f;
}
var numsum = func();
console.log(numsum(2))

// closers are functions that refer to independent variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.