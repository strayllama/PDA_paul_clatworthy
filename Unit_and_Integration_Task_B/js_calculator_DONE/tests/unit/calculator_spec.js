var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  //1 - calculator.add()
  // it should add to numbers together
  it('it should add to numbers together', function(){
    calculator.previousTotal = 5;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 9);
  })

  //2 - calculator.subtract()
  // it should subtract numbers from each other
  it('it should subtract numbers from each other', function(){
    calculator.previousTotal = 5;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 1);
  })


  //3 - calculator.multiply()
  // it should multiply numbers by each other
  it('it should multiply numbers by each other', function(){
    calculator.previousTotal = 5;
    calculator.multiply(4);
    assert.equal(calculator.runningTotal, 20);
  })

  //4 - calculator.divide()
  it('it should divide numbers by each other', function(){
    calculator.previousTotal = 10;
    calculator.divide(5);
    assert.equal(calculator.runningTotal, 2);
  })

  //5 - calculator.numberClick()
  it('it should concat running total if no functions clicked since last number', function(){
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 5);
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 54);
  })

  //6 - calculator.operatorClick()
  it('it should preform function of operator when a number is clicked, if previous click was the operator', function(){
    calculator.numberClick(10);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  })

  //7 - calculator.clearClick()
  it('it should reset the runningTotal, if runningTotal > 0', function(){
    calculator.numberClick(10);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    assert.equal(calculator.previousOperator, '+');
    assert.equal(calculator.previousTotal, 10);
    assert.equal(calculator.runningTotal, 1);

    calculator.clearClick();
    assert.equal(calculator.previousOperator, '+');
    assert.equal(calculator.previousTotal, 10);
    assert.equal(calculator.runningTotal, 0);
  })

  //7 - calculator.clearClick()
  it('it should reset the runningTotal, previousTotal and previousOperator if runningTotal = 0', function(){
    calculator.numberClick(10);
    calculator.operatorClick('+');
    calculator.numberClick(1);

    calculator.clearClick();
    calculator.clearClick();
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.previousTotal, null);
    assert.equal(calculator.runningTotal, 0);
  })

});
