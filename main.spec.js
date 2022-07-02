
const main = require('./main');


// ADD - Basic Functionality
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
    test.skip('div two numbers', () => {
      expect(main.div(50, 2)).toEqual(25);    // if 50 and 2 are passed this function will return 25!
    });
});

describe('Basic Calculator test', () => {
    test.skip('divs Multiple numbers', () => {
      expect(main.div(100, 25, 2)).toEqual(2); // if passed 100, 25 and 2 this function will return 2
    });
});
describe('Basic Calculator test', () => {
    test.skip('divs an array of  numbers', () => {
    var array = [100, 5, 4, 3, 2, 1];
      expect(main.div(array)).toEqual(0.83);    // if passed array containing 100, 5, 4, 3, 2, and 1 it will return 0.833333
    });
});

//DIVs -  Basic ERROR Handling
describe('Error Handling test', () => {
    test.skip('Handles strings if passed', () => {
      expect(main.div("Welcome Error!")).toEqual(Error); // if passed a string it will return an error 
    });
});

describe('Error Handling test', () => {
    test.skip('Handles Empty arrays if passed', () => {
        var array = [];
      expect(main.div(array)).toEqual(Error);   // if passed an array it will return an error
    });
});

describe('Error Handling test', () => {
    test.skip('Handles Empty input', () => {
      expect(main.div()).toEqual(Error);        //if passed nothing it will return an error
    });
});

//DIVs - Divde by zero ERROR 

describe('Error Handling test', () => {
    test.skip('Divide by zero', () => {
      expect(main.div(0, 0)).toEqual(Error);        /*** SPECIAL CASE: if passed zero and zero it will return Error as you can't divide by zero.*/
    });
});


// MULs - Basic Functionality 
describe('Basic Calculator test', () => {
    test.skip('muls two numbers', () => {
      expect(main.mul(2,3)).toEqual(6);     //if passed 2 and 3 it will return 6
    });
});
describe('Basic Calculator test', () => {
    test.skip('muls Multiple numbers', () => {
      expect(main.mul(2,3,2)).toEqual(12);  // if passed 2, 3, and 2 it will return 12 
    });
});
describe('Basic Calculator test', () => {
    test.skip('muls an array of  numbers', () => {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(main.mul(array)).toEqual(3628800);  // if passed array with 1 through 10 it will return 3,628,800
    });
});

//MULs -  Basic ERROR Handling
describe('Error Handling test', () => {
    test.skip('Handles strings if passed', () => {
      expect(main.mul("Your Almost done!")).toEqual(Error); // if passed a string it will return an error!
    });
});

describe('Error Handling test', () => {
    test.skip('Handles Empty arrays if passed', () => {
        var array = [];
      expect(main.mul(array)).toEqual(Error);  // if passed an empty array it will return an error
    });
});

describe('Error Handling test', () => {
    test.skip('Handles Empty input', () => {
      expect(main.mul()).toEqual(Error);  // if passed nothing it will return an Error!
    });
});