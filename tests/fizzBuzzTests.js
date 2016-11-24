

/*QUESTION 3:*  Create a function fizzBuzz to return 'Fizz', 'Buzz', 'FizzBuzz', or the argument it receives, all depending on the argument of the function, a number that is divisible by, 3, 5, or both 3 and 5, respectively.*/
'use strict'
var chai = require('chai')
var expect = chai.expect;

var myApp = require('../app/fizzBuzz.js')

//When the number is not divisible by 3 or 5, the number itself should be returned.

describe("Fizz Buzz tests ", function() {



 it("should return `Fizz` for number divisible by 3", function() {

   expect(myApp.fizzBuzz(3)).to.equal('Fizz');

 });



 it("should return `Buzz` for number divisible by 5", function() {

   expect(myApp.fizzBuzz(5)).to.equal('Buzz');

 });



 it("should return `FizzBuzz` for 15", function() {

   expect(myApp.fizzBuzz(15)).to.equal('FizzBuzz');

 });



 it("should return `FizzBuzz` for 45", function() {

   expect(myApp.fizzBuzz(45)).to.equal('FizzBuzz');

 });



 it("should return `FizzBuzz` for 90", function() {

   expect(myApp.fizzBuzz(90)).to.equal('FizzBuzz');

 });



 it("should return `Fizz` for 63", function() {

   expect(myApp.fizzBuzz(63)).to.equal('Fizz');

 });



 it("should return 7 since its indivisible by 3 and 5", function() {

   expect(myApp.fizzBuzz(7)).to.equal(7);

 });



 it("should return 101 since its indivisible by 3 and 5", function() {

   expect(myApp.fizzBuzz(101)).to.equal(101);

 });
})