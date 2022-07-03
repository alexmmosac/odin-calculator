
const main = require('./main');
// ADD - Basic Functionality
describe('Basic Calculator test', () => {
    test('Take in one number and return it.', () => {
      expect(main.add(14)).toEqual(14);   // IF passed 14 return 14.
    });
});



describe('Basic Calculator test', () => {
    test('adds two numbers', () => {
      expect(main.add(2, 2)).toEqual(4);   // IF passed 2 and 2 this function will return 4.
    });
});

describe('Basic Calculator test', () => {
    test('adds multiple numbers', () => {
      expect(main.add(5, 5, 5, 5)).toEqual(20);   // IF passed 5, 5, 5, and 5 this function will return 20.
    });
});

describe('Basic Calculator test', () => {
    test('adds an array of numbers', () => {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(main.add(array)).toEqual(55);    //IF  passed an array containing all numbers 1 - 10 this function will return 55
    });
});



// ADD - ERROR Handling/ TYPE handling.
describe('Error Handling test', () => {
    test('Handles strings if passed', () => {
      expect(main.add("Hello Error!")).toEqual(Error); // IF passed "Hello Error" function will return a Error
    });
});
describe('Error Handling test', () => {
    test('Handles Empty arrays', () => {
        var array = [];
      expect(main.add(array)).toEqual(Error); // If passed array containing nothing this function will return an Error
    });
});

describe('Error Handling test', () => {
    test('Handles Empty input', () => {
      expect(main.add()).toEqual(Error); // If nothing is passed this function will return an Error!
    });
});

// SUBs -  Basic Functionality
describe('Basic Calculator test', () => {
    test('Take in one number and return it.', () => {
      expect(main.sub(14)).toEqual(14);   // IF passed 14 return 14.
    });
});
describe('Basic Calculator test', () => {
    test('subs two numbers', () => {
      expect(main.sub(4,2)).toEqual(2);   // if passed 4 and 2 this funciton will return 2
    });
});
describe('Basic Calculator test', () => {
    test('subs Multiple numbers', () => {
      expect(main.sub(100, 50, 40)).toEqual(10); // if passed 100, 50, and 40 this function will return 10
    });
});
describe('Basic Calculator test', () => {
    test('subs an array of  numbers', () => {
        var array = [100, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      expect(main.sub(array)).toEqual(45);  //if passed array containg 100 and all numbers of 1-10 this function will return 45
    });
});
// SUBs - ERROR Handling
describe('Error Handling test', () => {
    test('Handles strings if passed', () => {
      expect(main.sub("Goodbye Error!")).toEqual(Error);  // IF passed "Hello Error" function will return a Error
    });
});

describe('Error Handling test', () => {
    test('Handles Empty arrays if passed', () => {
        var array = [];
      expect(main.sub(array)).toEqual(Error);     // If passed array containing nothing this function will return an Error
    });
});

describe('Error Handling test', () => {
    test('Handles Empty input', () => {
      expect(main.sub()).toEqual(Error);        // If nothing is passed this function will return an Error!
    });
});


// DIVs - Basic Functionality
describe('Basic Calculator test', () => {
    test('Take in one number and return it.', () => {
      expect(main.div(14)).toEqual(14);   // IF passed 14 return 14.
    });
});
describe('Basic Calculator test', () => {
    test('div two numbers', () => {
      expect(main.div(50, 2)).toEqual(25);    // if 50 and 2 are passed this function will return 25!
    });
});

describe('Basic Calculator test', () => {
    test('divs Multiple numbers', () => {
      expect(main.div(100, 25, 2)).toEqual(2); // if passed 100, 25 and 2 this function will return 2
    });
});
describe('Basic Calculator test', () => {
    test('divs an array of  numbers', () => {
    var array = [100, 5, 4, 3, 2, 1];
      expect(main.div(array)).toEqual( 0.8333333333333334);    // if passed array containing 100, 5, 4, 3, 2, and 1 it will return 0.833333
    });
});

//DIVs -  Basic ERROR Handling
describe('Error Handling test', () => {
    test('Handles strings if passed', () => {
      expect(main.div("Welcome Error!")).toEqual(Error); // if passed a string it will return an error 
    });
});

describe('Error Handling test', () => {
    test('Handles Empty arrays if passed', () => {
        var array = [];
      expect(main.div(array)).toEqual(Error);   // if passed an array it will return an error
    });
});

describe('Error Handling test', () => {
    test('Handles Empty input', () => {
      expect(main.div()).toEqual(Error);        //if passed nothing it will return an error
    });
});

//DIVs - Divde by zero ERROR 

describe('Error Handling test', () => {
    test('Divide by zero', () => {
      expect(main.div(0, 0)).toEqual(Error);        /*** SPECIAL CASE: if passed zero and zero it will return Error as you can't divide by zero.*/
    });
});


// MULs - Basic Functionality 
describe('Basic Calculator test', () => {
    test('Take in one number and return it.', () => {
      expect(main.mul(14)).toEqual(14);   // IF passed 14 return 14.
    });
});


describe('Basic Calculator test', () => {
    test('muls two numbers', () => {
      expect(main.mul(2,3)).toEqual(6);     //if passed 2 and 3 it will return 6
    });
});
describe('Basic Calculator test', () => {
    test('muls Multiple numbers', () => {
      expect(main.mul(2,3,2)).toEqual(12);  // if passed 2, 3, and 2 it will return 12 
    });
});
describe('Basic Calculator test', () => {
    test('muls an array of  numbers', () => {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(main.mul(array)).toEqual(3628800);  // if passed array with 1 through 10 it will return 3,628,800
    });
});

//MULs -  Basic ERROR Handling
describe('Error Handling test', () => {
    test('Handles strings if passed', () => {
      expect(main.mul("Your Almost done!")).toEqual(Error); // if passed a string it will return an error!
    });
});

describe('Error Handling test', () => {
    test('Handles Empty arrays if passed', () => {
        var array = [];
      expect(main.mul(array)).toEqual(Error);  // if passed an empty array it will return an error
    });
});

describe('Error Handling test', () => {
    test('Handles Empty input', () => {
      expect(main.mul()).toEqual(Error);  // if passed nothing it will return an Error!
    });
});



// CONVERT_TO_PERCENT - basics
describe('Features Test', () => {
    test('Converts one number to percent', () => {                  //converts one number to percent form
      expect(main.convert_to_percent(17)).toEqual(0.17);
    });
});
describe('Features Test', () => {
    test('Converts multiple number to percent', () => {
      expect(main.convert_to_percent(17, 100, 10, 3)).toEqual([0.17, 1, 0.1, 0.03]);    // convert multiple numbers and returns an array.
    });
});

describe('Features Test', () => {
    test('Converts array to an array of percents', () => {
        var array = [17, 100, 10, 3, 5, 6]
        var array_return = [0.17, 1, 0.1, 0.03, 0.05, 0.06]                     // take an array and return an array with the values in percent form 
      expect(main.convert_to_percent(array)).toEqual(array_return);
    });
});
describe('Features Test', () => {
    test('Handles empty array', () => {                         // handles empty arrays
        var array = []
      expect(main.convert_to_percent(array)).toEqual(Error);
    });
});
describe('Features Test', () => {
    test('Handles Strings being passed', () => {            // handles strings 
      expect(main.convert_to_percent("DONE!")).toEqual(Error);
    });
});
describe('Features Test', () => {
    test('Handles nothing being passed', () => {            // handles nothing being passed! 
      expect(main.convert_to_percent()).toEqual(Error);
    });
});
