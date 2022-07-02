
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

function sub(){
    var differance;
    if(arguments !== undefined){
        if(arguments.length >= 2){
            var temp = arguments[0];            // HEAD of arguments to store top number. 
            for(var x = 1; x < arguments.length; x++){          // for loop set after the HEAD
                temp -= arguments[x];               // subtract all sub nodes from the HEAD. 
            }
            differance = temp;
            return differance;
        }
        else if (arguments.length == 0){
            return Error;
        }
        else if(typeof arguments[0] == "object"){           // Checks if array type
            var args = Array.prototype.slice.call(arguments[0])     // puts args into new array
            if(args.length == 0){               //checks for empty array.
                return Error;
            }
            else{
                var temp = args[0];
                args.slice(1).forEach(element => {
                    temp -= element;
                });
            differance = temp;
            return differance;
            }
        }
        else if(typeof arguments[0] == "string"){       // check if string
            return Error;
        }
        else{
            return arguments[0];
        }
    }
    else{
        return Error;
    }
}
function div(){
var quotient;
if(arguments !== undefined){
    if(arguments.length >= 2){
        if(arguments[0] == 0){
            return Error;
        }
        else{
        var temp = arguments[0];
        for(x = 1; x < arguments.length; x++){
            temp /= arguments[x];
        }
        quotient = temp;
        return quotient;
    }
    }
    else if(arguments.length == 0){
        return Error;
    }
    else if(typeof arguments[0] == "object"){           // Checks if array type
        var args = Array.prototype.slice.call(arguments[0])     // puts args into new array
        if(args.length == 0){               //checks for empty array.
            return Error;
        }
        else{
            var temp = args[0];
            args.slice(1).forEach(element => {
                temp /= element;
            });
        quotient = temp;
        return quotient;
        }
    }
    else if(typeof arguments[0] == "string"){       // check if string
        return Error;
    }
    else{
        return arguments[0];
    }
}
else{
    return Error;
}
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