var x = window.prompt("Enter your first value:")//first input variable
var y = window.prompt("Enter your second value")//second input variable
var operation = window.prompt("Input '+' or '-' or '*' or '/', to perform an operation on the operands")
var z; //result variable

//using the unary plus(+) to convert the input strings to numbers
var int_x = (+x);
var int_y = (+y);

//addition
if (operation == "+"){
    z = int_x + int_y;
    window.alert("result=" + z);
}

//substraction
else if(operation == "-"){
    z = int_x - int_y;
    window.alert("result=" + z);
}

//multiplication
else if(operation == "*"){
    z = int_x * int_y;
    window.alert("result=" + z);
}

//division
else{
    z = int_x / int_y;
    window.alert("result=" + z);
}
