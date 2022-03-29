import { expect } from 'chai';
import { RemoveDuplicateFromSortedArray } from '../leetCode/removeDuplicateFromSortedArray/removeDuplicateFromSortedArray.js';
 
describe("RemoveDuplicateFromSortedArray class under test", () => {
 
  let checkRemoveDuplicate;
 
  beforeEach(() => {
    checkRemoveDuplicate = new RemoveDuplicateFromSortedArray();
  });
 
  it("should pass this test test", () =>{
    expect(true).to.eql(true)
  });

  it("should return '[1,2,3,4,5]', when passed a [1,2,3,4,4,4,4,5]", () =>{
    expect(checkRemoveDuplicate.removeDuplicate([1,2,3,4,4,4,4,5])).to.eql([1,2,3,4,5]);
  });

  it("should return '[]', when passed a []", () =>{
    expect(checkRemoveDuplicate.removeDuplicate([])).to.eql([]);
  });

  it("should return '[21,30,44,70,99]', when passed a [99,21,30,30,44,21,70,99,99]", () =>{
    expect(checkRemoveDuplicate.removeDuplicate([99,21,30,30,44,21,70,99,99])).to.eql([21,30,44,70,99]);
  }); 
})
