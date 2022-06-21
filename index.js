let condition = true;

//addition
while (condition){
    let x = window.prompt("Enter your first value:")//first input variable
    let y = window.prompt("Enter your second value")//second input variable
    let operation = window.prompt("Input '+' or '-' or '*' or '/', to perform an operation on the operands")
    let z; //result variable

    //using the unary plus(+) to convert the input strings to numbers
    let int_x = (+x);
    let int_y = (+y);
    if (operation === "+"){
        z = int_x + int_y;
        window.alert("result=" + z);
        condition = false;
    }
    
    //subtraction
    else if(operation === "-"){
        z = int_x - int_y;
        window.alert("result=" + z);
        condition = false;
    }
    
    //multiplication
    else if(operation === "*"){
        z = int_x * int_y;
        window.alert("result=" + z);
        condition = false;
    }
    
    //division
    else if(operation === "/"){
        z = int_x / int_y;
        window.alert("result=" + z);
        condition = false;

    }

    else{
        window.alert("Wrong input")
        condition = false;
    }

    let option = prompt("Type 'c' to continue, 'q' to quit");
    if (option == "c"){
        condition = true;
    }

    else if (option == "q"){
        condition = false;
    }

}

