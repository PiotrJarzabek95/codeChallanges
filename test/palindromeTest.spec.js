import { expect } from 'chai';
import { Palindrome } from '../leetCode/palindroneNumber/palindroneNumber.js';
 
describe("Palindrome class under test", () => {
 
  let checkPalindrome;
 
  beforeEach(() => {
    checkPalindrome = new Palindrome();
  });
 
  it("should pass this test test", () =>{
    expect(true).to.eql(true)
  });

  it("should return false, when passed a -121", () =>{
    expect(checkPalindrome.isPalindrome(-121)).to.eql(false);
  });

  it("should return true, when passed a 121", () =>{
    expect(checkPalindrome.isPalindrome(121)).to.eql(true);
  });

  it("should return false, when passed a 10", () =>{
    expect(checkPalindrome.isPalindrome(10)).to.eql(false);
  });

  it("should return false, when passed a 122", () =>{
    expect(checkPalindrome.isPalindrome(122)).to.eql(false);
  });

  it("should return true, when passed a 431134", () =>{
    expect(checkPalindrome.isPalindrome(-121)).to.eql(false);
  });
 
})
