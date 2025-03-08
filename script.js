function add(x,y){
    return x+y;
};

function subtract(x,y){
    return x-y
};
function multiply(x,y){
    return x*y;
};
function divide(x,y){
    if (y=0){return 'Error'}else{return x/y};
};

function operate(num1,sign,num2){
    switch (sign) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        };
}

