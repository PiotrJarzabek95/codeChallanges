import { expect } from 'chai';
import { ValidParentheses } from '../leetCode/validParentheses/validParentheses.js';

describe("ValidParentheses class under test", () => {
 
  let checkValidParentheses;
 
  beforeEach(() => {
    checkValidParentheses = new ValidParentheses();
  });
 
  it("should pass this test test", () =>{
    expect(true).to.eql(true)
  });
  
  it("should return true  when passed value are : '{}()<>'", () =>{
    expect(checkValidParentheses.checkValidParentheses('{}()<>')).to.eql(true);
  });

  it("should return false  when passed value are : '}}}}())<' ", () =>{
    expect(checkValidParentheses.checkValidParentheses('}}}}())<')).to.eql(false);
  });

  it("should return false  when passed value are :'{())}(<)>'" , () =>{
    expect(checkValidParentheses.checkValidParentheses('{())}(<)>')).to.eql(false);
  });
  
})
