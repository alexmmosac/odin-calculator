function add(){
var sum = 0;
if(arguments !== undefined){
    if(arguments.length >= 2){              // Adds multiply args together. 
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    else if(arguments.length == 0){             // Checks if no args passed.  
        return Error;
    }
    else if(typeof arguments[0] == "object"){           // Checks if array type 
        var args = Array.prototype.slice.call(arguments[0])     // puts args into new array
        if(args.length == 0){               //checks for empty array. 
            return Error;
        }
        else{
        args.forEach(element => {               // adds all args from new array into sum. 
            sum += element;
        });
        return sum;
    }
    }
    else if(typeof arguments[0] == "string"){       // check if string 
        return Error;
    }
    else{
        return arguments[0];         //return if only passed 1 arg
    }
}
else{
    return Error;

}
}

function sub(number_1, number_2){
return null;
}

function div(){
return null;
}

function mul(){
return null;
}

module.exports = {
    add,
    sub,
    div,
    mul
}