var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

//Do the number buttons work to update the display of the running total?
  it('should have working number buttons, that update the display of running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })


// Do each of the arithmetical operations work to update the display with the result of the operation?
it('should update display with result correctly for arithmetical operations', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click()
  element(by.css('#operator_equals')).click()
  expect(running_total.getAttribute('value')).to.eventually.equal('4')
})

// Can we chain multiple operations together?
it('should update display with result correctly for each arithmetical operations', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click(); element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click(); element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('16')
})

// Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)
it('should work for negative numbers', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number6')).click()
  element(by.css('#operator_equals')).click()
  expect(running_total.getAttribute('value')).to.eventually.equal('-4')
})

it('should work for decimals', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number4')).click()
  element(by.css('#operator_equals')).click()
  expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
})

it('should work for large numbers', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number3')).click()
  element(by.css('#number3')).click()
  element(by.css('#number3')).click()
  element(by.css('#number3')).click()
  element(by.css('#number3')).click()
  element(by.css('#number3')).click()
  element(by.css('#number3')).click()
  element(by.css('#number3')).click()
  element(by.css('#operator_equals')).click()
  expect(running_total.getAttribute('value')).to.eventually.equal('55555555')
})


// What does the code do in exceptional circumstances?
// If you divide by zero, what is the effect? It should say Infinity, and then correct to code to make that test pass.

it('should work for devition by zero', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click()
  element(by.css('#operator_equals')).click()
  expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
})




});
