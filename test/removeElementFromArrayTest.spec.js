import { expect } from 'chai';
import { RemoveElementFromArray } from '../leetCode/removeElementFromArray/removeElementFromArray.js';
 
describe("RemoveElementFromArray class under test", () => {
 
  let checkRemoveElement;
 
  beforeEach(() => {
    checkRemoveElement = new RemoveElementFromArray();
  });
 
  it("should pass this test test", () =>{
    expect(true).to.eql(true)
  });

  it("should return '[1,2,3,4,5]', when passed a [1,2,3,4,5,7] and 7", () =>{
    expect(checkRemoveElement.removeElement([1,2,3,4,5,7], 7)).to.eql([1,2,3,4,5]);
  });

  it("should return '[45,60,88,120]', when passed a [21,45,60,88,120] and 21", () =>{
    expect(checkRemoveElement.removeElement([21,45,60,88,120], 21)).to.eql([45,60,88,120]);
  });

  it("should return '[]', when passed a [5,5,5,5] and 5", () =>{
    expect(checkRemoveElement.removeElement([5,5,5,5],5)).to.eql([]);
  }); 
})
