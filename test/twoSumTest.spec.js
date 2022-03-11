import { expect } from 'chai';
import { TwoSum } from '../leetCode/twoSum/twoSum.js';

describe("TwoSum class under test", () => {
 
  let checkTwoSum;
 
  beforeEach(() => {
    checkTwoSum = new TwoSum();
  });
 
  it("should pass this test test", () =>{
    expect(true).to.eql(true)
  });
  
  it("should return [0,1]  when passed value are : [2,7,11,15] and target is 9", () =>{
    expect(checkTwoSum.twoSum([2,7,11,15],9)).to.eql([0,1]);
  });

  it("should return [0,1]  when passed value are : [3,3] and target is 6", () =>{
    expect(checkTwoSum.twoSum([3,3],6)).to.eql([0,1]);
  });

  it("should return [1,2]  when passed value are : [3,2,4] and target is 6", () =>{
    expect(checkTwoSum.twoSum([3,2,4],6)).to.eql([1,2]);
  });
  
})
