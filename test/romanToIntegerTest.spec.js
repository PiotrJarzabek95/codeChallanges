import { expect } from 'chai';
import { RomanToInt } from '../leetCode/romanToInteger/romanToInteger.js';
 
describe("RomanToInt class under test", () => {
 
  let checkRomanToInt;
 
  beforeEach(() => {
    checkRomanToInt = new RomanToInt();
  });
 
  it("should pass this test test", () =>{
    expect(true).to.eql(true)
  });

  it("should return 3, when passed a III", () =>{
    expect(checkRomanToInt.romanToInt('III')).to.eql(3);
  });

  it("should return 58, when passed a LVIII", () =>{
    expect(checkRomanToInt.romanToInt('LVIII')).to.eql(58);
  });

  it("should return 1994, when passed a MCMXCIV", () =>{
    expect(checkRomanToInt.romanToInt('MCMXCIV')).to.eql(1994);
  });
})
